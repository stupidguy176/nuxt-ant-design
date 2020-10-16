<template>
  <div class="meme">
    <div>
      <HotTable :settings="settings"> </HotTable>
    </div>
  </div>
</template>

<script>
import { HotTable, HotColumn } from "~/plugins/vue-handsontable";
import CustomEditor from "~/components/CustomEditor";
export default {
  components: {
    HotTable,
    HotColumn,
    CustomEditor
  },
  data() {
    return {
      settings: {
        data: [{}, {}, {}, {}, {}],
        width: '100%',
        colWidths: [150, 150, 150, 150, 150, 100, 100],
        rowHeaders: true,
        manualColumnResize: true,
        contextMenu: {
          items: {
            row_below: {
              name: "Thêm dòng"
            },
            row_below_op: {
              name: "Thêm 5 dòng",
              callback: function(key, options) {
                this.alter("insert_row", this.getSelected()[0], 5);
              }
            },
            remove_row: {
              name: "Xóa"
            }
          }
        },
        allowInsertRow: true,
        colHeaders: [
          // "ID",
          "Khách hàng",
          "Ma CB",
          "Loại châu 1 (ly)",
          "Loại châu 2 (ly)",
          "Loại châu 3 (ly)",
          "BẠC 10",
          "BẠC CHẾ"
        ],
        columns: [
          // {
          //   type: "numeric",
          //   data: "id"
          // },
          {
            type: "dropdown",
            source: ["An", "Trang", "Khang", "Mai", "Nam"]
          },
          {
            type: "text",
            data: "code",
            editor: false
          },
          {
            type: "numeric",
            data: "chauType1"
          },
          {
            type: "numeric",
            data: "chauType2"
          },
          {
            type: "numeric",
            data: "chauType3"
          },
          {
            type: "numeric",
            data: "silverTen"
          },
          {
            type: "numeric",
            data: "silverPercent"
          }
        ],
        licenseKey: "non-commercial-and-evaluation",
        afterChange: changes => {
          if (!changes) return;
          const locale = changes[0][0];
          let data = [...this.settings.data];

          // thang nao co day du data va chua co ma che bac -> tu dong xin ma che bac
          // khach hang data[locale][0]
          if (
            data[locale][0] &&
            !data[locale].code &&
            data[locale].hasOwnProperty("chauType1") &&
            data[locale].hasOwnProperty("chauType2") &&
            data[locale].hasOwnProperty("chauType3") &&
            data[locale].hasOwnProperty("silverTen") &&
            data[locale].hasOwnProperty("silverPercent")
          ) {
            data[locale].code = this.generateCode();
          }

          // thang nao xoa het data -> xoa ma che bac, xoa id
          if (
            !data[locale][0] &&
            data[locale].chauType2 == null &&
            data[locale].chauType3 == null &&
            data[locale].silverTen == null &&
            data[locale].chauType1 == null &&
            data[locale].silverPercent == null
          ) {
            data[locale].code = null;
          }

          // tu dong xin them hang khi da o hang cuoi cung
          this.settings.data = data;
        }
      },
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
    generateCode() {
      let code;
      var d = new Date();
      code = `CB${d.getFullYear()}${d.getMonth()}${d.getDate()}${d.valueOf()}`;
      return code;
    }
  }
};
</script>
<style lang="css" scoped>
.meme {
  padding: 50px;
  margin-left: 20%;
}
#custom-editor-example {
  padding-top: 50px;
}
</style>
<style src="~/node_modules/handsontable/dist/handsontable.full.css"></style>
