<template>
  <div
    v-if="isVisible"
    id="editorElement"
    :style="style"
    @mousedown="stopMousedownPropagation"
  >
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Click me <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          3rd menu item
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <button v-on:click="setLowerCase">
      {{ value.toLowerCase() }}
    </button>
    <button v-on:click="setUpperCase">
      {{ value.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { BaseEditorComponent } from "~/plugins/vue-handsontable";

export default {
  name: "CustomEditor",
  extends: BaseEditorComponent,
  components: {
    BaseEditorComponent
  },
  data: function() {
    return {
      // We'll need to define properties in our data object,
      // corresponding to all of the data being injected from
      // the BaseEditorComponent class, which are:
      // - hotInstance (instance of Handsontable)
      // - row (row index)
      // - col (column index)
      // - prop (column property name)
      // - TD (the HTML cell element)
      // - originalValue (cell value passed to the editor)
      // - cellProperties (the cellProperties object for the edited cell)
      hotInstance: null,
      TD: null,
      row: null,
      col: null,
      prop: null,
      originalValue: null,
      value: "",
      cellProperties: null,
      isVisible: false,
      style: {
        position: "absolute",
        padding: "15px",
        background: "#fff",
        zIndex: 999,
        border: "1px solid #000"
      }
    };
  },
  methods: {
    stopMousedownPropagation: function(e) {
      e.stopPropagation();
    },
    prepare: function(row, col, prop, td, originalValue, cellProperties) {
      // We'll need to call the `prepare` method from
      // the `BaseEditorComponent` class, as it provides
      // the component with the information needed to use the editor
      // (hotInstance, row, col, prop, TD, originalValue, cellProperties)
      BaseEditorComponent.options.methods.prepare.call(
        this,
        row,
        col,
        prop,
        td,
        originalValue,
        cellProperties
      );

      if (!document.body.contains(this.$el)) {
        document.body.appendChild(this.$el);
      }

      const tdPosition = td.getBoundingClientRect();

      // As the `prepare` method is triggered after selecting
      // any cell, we're updating the styles for the editor element,
      // so it shows up in the correct position.
      this.style.left = tdPosition.left + window.pageXOffset + "px";
      this.style.top = tdPosition.top + window.pageYOffset + "px";
    },
    setLowerCase: function() {
      this.setValue(this.value.toLowerCase());
      this.finishEditing();
    },
    setUpperCase: function() {
      this.setValue(this.value.toUpperCase());
      this.finishEditing();
    },
    open: function() {
      this.isVisible = true;
    },
    close: function() {
      this.isVisible = false;
    },
    setValue: function(value) {
      this.value = value;
    },
    getValue: function() {
      return this.value;
    }
  }
};
</script>
