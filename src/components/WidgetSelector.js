
import { h, Component } from 'preact'
import Modal from 'react-modal'
import tangoJsCore from 'tangojs-core'
import WidgetFactoryService from '../legacy/WidgetFactoryService.js'

import SchemaForm from "react-jsonschema-form"

const DEFAULT_PROPS = {
  onAddWidget: function () {},
  onClose: function() {},
  isOpen: false,
  models: []
}

function selectMatchingWidgets(infos) {

  const { DeviceInfo, AttributeInfo, CommandInfo } = tangoJsCore.api
  const readOnly = tangoJsCore.tango.AttrWriteType.READ

  const widgetFactoryService
    = new WidgetFactoryService(
      window.tangojs.web.components)

  const isAny = (constructor) =>  {
    return !! infos.find(x => x instanceof constructor)
  }

  const avalilableComponentDescriptors
    = widgetFactoryService.getAvailableComponentDescriptors({
      // multipleModels: infos.length > 1,
      attributeModel: isAny(AttributeInfo),
      commandModel: isAny(CommandInfo),
      statusModel: isAny(DeviceInfo),
      readOnlyModel: !! infos.find(x => x.writable === readOnly)
    })

  return avalilableComponentDescriptors
}

function buildFormWithAttributes(htmlAttributes) {

    console.log('attrs', htmlAttributes)
  const keys = Object.keys(htmlAttributes)

  const props = keys.reduce((obj, key) => {

    const pType = htmlAttributes[key].type

    if (pType instanceof Array && key !== 'model') {
      console.warn('skipping unsupported type of', key)
      return obj
    }

    if (key === 'model') {
      obj[key] = { type: 'string' }
    } else {
      const type = htmlAttributes[key].type.name.toLowerCase()
      obj[key] = { type }
    }

    if (key == 'poll-period') {
      obj[key] = {
        type: 'integer',
        minimum: 500,
        maximum: 5000,
        multipleOf: 500
      }
    }

    if (key == 'data-limit') {
      obj[key] = {
        type: 'integer',
        minimum: 5,
        maximum: 40,
        multipleOf: 5
      }
    }

    return obj
  }, {})

  const schema = {
    title: 'Attributes',
    type: 'object',
    required: keys,
    properties: props
  }

  // TODO: default values should be stored in widget's description
  // for now let's use some sane values
  const defaults = keys.reduce((obj, key) => {
    if (key.startsWith('show')) {
      obj[key] = true
    } else if (key == 'poll-period') {
      obj[key] = 1000
    } else if (key == 'data-limit') {
      obj[key] = 20
    }
    return obj
  }, {})

  return ({ schema, defaults })
}

export default function WidgetSelector(props = DEFAULT_PROPS) {

  const modelInfoPairs = props.models

  const widgets = selectMatchingWidgets(modelInfoPairs.map(e => e.info))
  const models = modelInfoPairs.map(e => e.model)

  const widgetConstructors = widgets.reduce((obj, e) => {
    obj[e.tagName]  = e
    return obj
  }, {})

  const modalProps = {
    isOpen: props.isOpen,
    contentLabel: 'mylabel'
  }

  const btnAddWidgetProps = {
    type: 'button',
    class: 'btn btn-primary',
    onClick: props.onAddWidget
  }

  const btnDismissProps = {
    type: 'button',
    class: 'btn btn-secondary',
    onClick: props.onClose
  }

  // TODO get this from state
  const selectedWidget = props.tag || Object.keys(widgetConstructors)[0]

  const widgetsSchema = {
    title: 'Widget',
    type: 'string',
    enum: Object.keys(widgetConstructors)
  }

  const widgetsUiSchema = { 'ui:emptyValue': selectedWidget }
  const widgetsDefaults = selectedWidget

  const { schema: attributesSchema, defaults: attributesDefaults }
    = buildFormWithAttributes(widgetConstructors[selectedWidget].attributes)

  const attributesUiSchema = {}

  if (attributesSchema.properties.model) {
    attributesDefaults.model = models.join(',')
    attributesUiSchema.model = { 'ui:readonly': true }
  }

  const widgetChanged = (e) => {
    props.onSelectWidget(e.formData)
    console.log('changed to', e)
  }

  const attributesSubmitted = (e) => {
    console.log('submitted', e)
    props.onAddWidget(selectedWidget, e.formData)
  }

  return h(Modal, modalProps,
    h('h2', {},  'Add widget'),
    h(SchemaForm, {
      schema: widgetsSchema,
      formData: widgetsDefaults,
      uiSchema: widgetsUiSchema,
      onChange: widgetChanged }, h('div')), // empty form body for no buttons
    h(SchemaForm, {
      schema: attributesSchema,
      formData: attributesDefaults,
      uiSchema: attributesUiSchema,
      onSubmit: attributesSubmitted }),
    h('button', btnAddWidgetProps, 'Add'),
    h('button', btnDismissProps, 'Close')
  )
}

