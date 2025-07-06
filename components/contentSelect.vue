<template>
  <div>
    <select class="contentSelect" name="content">
      <option disabled selected value> -- إختر -- </option>
      <optgroup label="برمجة">
        <option value="volvo">برمجة مواقغ</option>
        <option value="saab">برمجة العاب</option>
      </optgroup>
      <optgroup label="تصميم">
        <option value="mercedes">تصميم جرافيكي</option>
        <option value="audi">تصميم خرافي</option>
      </optgroup>
    </select>
  </div>
</template>
<script>
export default {
}
</script>
