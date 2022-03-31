<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <select :id="id" ref="input" v-model="selected" v-bind="{ ...$attrs, class: null }" class="form-select" :class="{ error: error }">
      <slot />
    </select>
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
      default: () => `select-input-${uuid()}`,
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean] as PropType<string | number | boolean | null>,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selected: this.modelValue,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('update:modelValue', selected)
    },
  },
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
