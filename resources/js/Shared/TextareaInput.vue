<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <textarea :id="id" ref="inputRef" v-bind="{ ...$attrs, class: null }" class="form-textarea" :class="{ error: error }" :value="(modelValue as string)" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, Ref } from 'vue'
import { v4 as uuid } from 'uuid'

defineOptions({ inheritAttrs: false })

defineProps({
  id: {
    type: String,
    default: () => `textarea-input-${uuid()}`,
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

defineExpose({ focus, select })
</script>
