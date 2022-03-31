<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <input :id="id" ref="inputRef" v-bind="{ ...$attrs, class: null }" class="form-input" :class="{ error: error }" :type="type" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, PropType, Ref } from 'vue'
import { v4 as uuid } from 'uuid'

defineProps({
  id: {
    type: String,
    default: () => `text-input-${uuid()}`,
  },
  type: {
    type: String,
    default: 'text',
  },
  error: String,
  label: String,
  modelValue: String as PropType<string | null>,
})

defineEmits(['update:modelValue'])

const inputRef = ref(null!) as Ref<HTMLInputElement>

const focus = () => {
  inputRef.value.focus()
}
const select = () => {
  inputRef.value.select()
}
const setSelectionRange = (start: number, end: number) => {
  inputRef.value.setSelectionRange(start, end)
}

defineExpose({ focus, select, setSelectionRange })
</script>
