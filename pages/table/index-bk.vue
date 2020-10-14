<template>
  <div class="meme">
    <div>
      <HotTable :settings="settings" :data="settings.data">
        <HotColumn title="ID" data="id"> </HotColumn>
        <HotColumn
          :settings="secondColumnSettings"
          read-only="true"
          data="name"
        >
        </HotColumn>
        <HotColumn title="Ma CB" data="payment.price"> </HotColumn>
        <HotColumn title="Loại châu 1 (ly)" data="payment.currency">
        </HotColumn>
        <HotColumn title="Loại châu 2 (ly)" data="payment.currency">
        </HotColumn>
        <HotColumn title="Loại châu 3 (ly)" data="payment.currency">
        </HotColumn>
        <HotColumn title="BẠC 10" data="payment.currency"> </HotColumn>
        <HotColumn title="BẠC CHẾ" data="payment.currency"> </HotColumn>
      </HotTable>
    </div>

    <div id="custom-editor-example">
      <HotTable :settings="hotSettings" :data="hutData">
        <HotColumn :width="250">
          <CustomEditor hot-editor></CustomEditor>
        </HotColumn>
      </HotTable>
    </div>

    <div>
      <HotTable :settings="settingss"> </HotTable>
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
      settingss: {
        data: [
          {
            id: 1,
            name: "Hoai An",
            code: "CBook",
            chauType1: 1,
            chauType2: 3,
            chauType3: 4,
            silverTen: 452,
            silverPercent: 45
          },
          {
            id: 2,
            name: "Hoai Anh",
            code: "CBookasdasd",
            chauType1: 1,
            chauType2: 3,
            chauType3: 4,
            silverTen: 452,
            silverPercent: 45
          },
          {
            id: 3,
            name: "Khanh",
            code: "CBookasdasd",
            chauType1: 1,
            chauType2: 3,
            chauType3: 4,
            silverTen: 452,
            silverPercent: 45
          },
          {
            id: 4,
            name: "Hoai Dinh",
            code: "CBookasdasd",
            chauType1: 1,
            chauType2: 3,
            chauType3: 4,
            silverTen: 452,
            silverPercent: 45
          },
          {
            id: 5,
            name: "Hoai Sang",
            code: "CBookasdasd",
            chauType1: 1,
            chauType2: 3,
            chauType3: 4,
            silverTen: 452,
            silverPercent: 45
          }
        ],
        colHeaders: [
          "ID",
          "Khách hàng",
          "Ma CB",
          "Loại châu 1 (ly)",
          "Loại châu 2 (ly)",
          "Loại châu 3 (ly)",
          "BẠC 10",
          "BẠC CHẾ"
        ],
        columns: [
          {
            type: "numeric",
            data: "id"
          },
          {
            type: "dropdown",
            source: [
              "An",
              "Trang",
              "Khang",
              "Mai",
              "Tuong",
              "Thao",
              "Trung",
              "Tuan",
              "Tinh",
              "Chau",
              "Nam"
            ]
          },
          {
            type: "numeric",
            data: "code"
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
        licenseKey: "non-commercial-and-evaluation"
      },
      secondColumnSettings: {
        title: "Khách hàng"
      },
      settings: {
        data: [
          {
            id: 1,
            name: "Hoai An",
            payment: { price: 13, currency: "PLN" }
          },
          {
            id: 2,
            name: "Thuy Trang",
            payment: { price: 14, currency: "USD" }
          },
          {
            id: 3,
            name: "Hoang Tuan",
            payment: { price: 300, currency: "USD" }
          }
        ],
        colHeaders: true,
        rowHeaders: true,
        licenseKey: "non-commercial-and-evaluation"
      },
      hotData: [
        {
          id: 1,
          name: "Hoai An",
          payment: { price: 13, currency: "PLN" }
        },
        {
          id: 2,
          name: "Thuy Trang",
          payment: { price: 14, currency: "USD" }
        },
        {
          id: 3,
          name: "Hoang Tuan",
          payment: { price: 300, currency: "USD" }
        }
      ],
      secondColumnSettings: {
        title: "Khách hàng"
      },
      hotSettings: {
        licenseKey: "non-commercial-and-evaluation",
        rowHeaders: true
      },
      hutData: [
        ["Obrien Fischer"],
        ["Alexandria Gordon"],
        ["John Stafford"],
        ["Regina Waters"],
        ["Kay Bentley"],
        ["Emerson Drake"],
        ["Deann Stapleton"]
      ],
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
