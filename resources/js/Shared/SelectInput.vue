<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <select :id="id" ref="inputRef" v-model="selected" v-bind="{ ...$attrs, class: null }" class="form-select" :class="{ error: error }">
      <slot />
    </select>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, watch, PropType, Ref } from 'vue'
import { v4 as uuid } from 'uuid'

const props = defineProps({
  id: {
    type: String,
    default: () => `select-input-${uuid()}`,
  },
  error: String,
  label: String,
  modelValue: [String, Number, Boolean] as PropType<string | number | boolean | null>,
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)
const inputRef = ref(null!) as Ref<HTMLInputElement>

watch(selected, (selected) => {
  emit('update:modelValue', selected)
})

const focus = () => {
  inputRef.value.focus()
}
const select = () => {
  inputRef.value.select()
}

defineExpose({ focus, select })
</script>
