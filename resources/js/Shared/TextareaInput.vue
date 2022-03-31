<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <textarea :id="id" ref="input" v-bind="{ ...$attrs, class: null }" class="form-textarea" :class="{ error: error }" :value="(modelValue as string)" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { v4 as uuid } from 'uuid'

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `textarea-input-${uuid()}`,
    },
    error: String,
    label: String,
    modelValue: String as PropType<string | null>,
  },
  emits: ['update:modelValue'],
  methods: {
    focus() {
      (this.$refs.input as HTMLInputElement).focus()
    },
    select() {
      (this.$refs.input as HTMLInputElement).select()
    },
  },
})
</script>
