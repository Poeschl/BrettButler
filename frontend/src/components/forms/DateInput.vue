<template>
  <div class="field">
    <label class="label">{{ props.label }}</label>
    <div class="control">
      <input
        ref="dateInput"
        class="input"
        type="date"
        :placeholder="props.placeholder"
      >
    </div>
    <p
      v-if="props.help.length > 0"
      class="help"
    >
      {{ props.help }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, Ref, ref, watch} from "vue";
import bulmaCalendar from "bulma-calendar";

const props = defineProps<{
  label: string,
  placeholder: string,
  value: Date,
  help: string,
  validate: (value: Date) => boolean
}>()

const emit = defineEmits<{
  (e: 'update:value', val: Date): void
}>()

const value = ref(props.value)
const datePickerInput = ref<HTMLInputElement>()
const datePicker = ref<bulmaCalendar | undefined>()

const valid: Ref<boolean> = computed(() => {
  return props.validate(value.value)
})

watch(valid, (newValue: boolean, oldValue: boolean) => {
  let style: string;
  if (newValue) {
    style = "input is-success"
  } else {
    style = "input"
  }
  document.getElementsByClassName("datetimepicker-dummy-wrapper")[0]
      .setAttribute('class', `datetimepicker-dummy-wrapper ${style}`)
})

const updateValue = () => {
  const patternRegex = /(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})/;
  // @ts-ignore
  const dateArray: number[] = patternRegex?.exec(datePicker.value?.value() ?? "")
    .map(value => value as unknown as number) ?? []
  const newValue = new Date(dateArray[3], dateArray [2] - 1, dateArray[1], dateArray[4], dateArray[5])
  value.value = newValue
  emit('update:value', newValue)
}

onMounted(() => {
  datePicker.value = bulmaCalendar.attach(datePickerInput.value, {
    displayMode: "dialog",
    isRange: false,
    type: "datetime",
    dateFormat: "dd.MM.yyyy",
    showHeader: false,
    weekStart: 1,
    validateLabel: "Select",
    showClearButton: false,
    enableYearSwitch: false,
    minuteSteps: 15
  })[0]
  // @ts-ignore
  datePicker.value?.value(value.value)
  // @ts-ignore
  datePicker.value?.on('save', () => updateValue())
})
</script>

<style scoped lang="scss">
</style>
