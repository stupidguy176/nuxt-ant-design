<template>
  <div class="meme">
    <a-button type="primary" style="margin-bottom: 24px" @click="checkme()">
      Primary
    </a-button>
    <div>
      <HotTable :settings="settings" :isListening="momo()"> </HotTable>
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
        // data: [
        //   {
        //     id: 1,
        //     name: "Hoai An",
        //     code: "CBook",
        //     chauType1: 1,
        //     chauType2: 3,
        //     chauType3: 4,
        //     silverTen: 452,
        //     silverPercent: 45
        //   },
        //   {
        //     id: 2,
        //     name: "Hoai Anh",
        //     code: "CBookasdasd",
        //     chauType1: 1,
        //     chauType2: 3,
        //     chauType3: 4,
        //     silverTen: 452,
        //     silverPercent: 45
        //   },
        //   {
        //     id: 3,
        //     name: "Khanh",
        //     code: "CBookasdasd",
        //     chauType1: 1,
        //     chauType2: 3,
        //     chauType3: 4,
        //     silverTen: 452,
        //     silverPercent: 45
        //   },
        //   {
        //     id: 4,
        //     name: "Hoai Dinh",
        //     code: "CBookasdasd",
        //     chauType1: 1,
        //     chauType2: 3,
        //     chauType3: 4,
        //     silverTen: 452,
        //     silverPercent: 45
        //   },
        //   {
        //     id: 5,
        //     name: "Hoai Sang",
        //     code: "CBookasdasd",
        //     chauType1: 1,
        //     chauType2: 3,
        //     chauType3: 4,
        //     silverTen: 452,
        //     silverPercent: 45
        //   }
        // ],
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
            source: ["An", "Trang", "Khang", "Mai", "Nam"]
          },
          {
            type: "text",
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
    momo() {
      console.log('isListening')
    },
    checkme() {
      this.settings.data[0] = {
        id: 1,
        name: "Hoai An",
        code: "CBook",
        chauType1: 1,
        chauType2: 3,
        chauType3: 4,
        silverTen: 452,
        silverPercent: 45
      };
      console.log("settings", this.settings.data[0]);
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
