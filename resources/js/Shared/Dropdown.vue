<template>
  <button ref="buttonRef" type="button" @click="show = true">
    <slot />
    <teleport v-if="show" to="#dropdown">
      <div>
        <div style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 99998; background: black; opacity: 0.2" @click="show = false" />
        <div ref="dropdownRef" style="position: absolute; z-index: 99999" @click.stop="show = !autoClose">
          <slot name="dropdown" />
        </div>
      </div>
    </teleport>
  </button>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick, PropType, Ref } from 'vue'
import { createPopper, Instance, Placement } from '@popperjs/core'

const props = defineProps({
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-end',
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
})

const show = ref(false)
const popper = ref(null) as Ref<Instance | null>
const buttonRef = ref(null!) as Ref<HTMLElement>
const dropdownRef = ref(null!) as Ref<HTMLElement>

watch(show, (show) => {
  if (show) {
    nextTick(() => {
      popper.value = createPopper(buttonRef.value, dropdownRef.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              altBoundary: true,
            },
          },
        ],
      })
    })
  } else if (popper.value) {
    setTimeout(() => popper.value?.destroy(), 100)
  }
})

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      show.value = false
    }
  })
})
</script>
