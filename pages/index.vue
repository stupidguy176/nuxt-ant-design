<template>
  <div class="container">
    <div>
      <a-alert
        message="Thành công!"
        description="Danh sách đã được làm mới"
        type="info"
        show-icon
        closable
      />
      <a-alert
        message="Có lỗi xảy ra!"
        description="Ngân hàng không tồn tại"
        type="error"
        show-icon
        closable
      />
    </div>
    <div class="my-loading">
      <a-spin :spinning="spinning">
        <div class="spin-content">
          可以点击‘切换’按钮，控制本区域的spin展示。
        </div>
      </a-spin>
      Loading state：<a-switch v-model="spinning" />
    </div>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Title"
        :breadcrumb="{ props: { routes } }"
        sub-title="This is a subtitle"
      />
    </div>
    <div>
      <a-date-picker
        v-model="startValue"
        format="DD-MM-YYYY"
        @change="onChange"
      />
    </div>
    <div>
      <a-auto-complete
        :data-source="dataSource"
        style="width: 200px"
        placeholder="input here"
        :filter-option="filterOption"
      />
    </div>
    <div>
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item href="">
          Application Center
        </a-breadcrumb-item>
        <a-breadcrumb-item href="">
          Application List
        </a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
      <a-breadcrumb>
        <span slot="separator" style="color: red">></span>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item href="">
          Application Center
        </a-breadcrumb-item>
        <a-breadcrumb-item href="">
          Application List
        </a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div>
      <a-button type="primary" @click="info">
        Display normal message
      </a-button>
      <a-button @click="success">
        Success
      </a-button>
      <a-button @click="error">
        Error
      </a-button>
      <a-button @click="warning">
        Warning
      </a-button>
    </div>
    <div>
      <a-button @click="() => openNotificationWithIcon('success')">
        Success
      </a-button>
      <a-button @click="() => openNotificationWithIcon('info')">
        Info
      </a-button>
      <a-button @click="() => openNotificationWithIcon('warning')">
        Warning
      </a-button>
      <a-button @click="() => openNotificationWithIcon('error')">
        Error
      </a-button>
    </div>
    <div style="background: #ECECEC; padding: 30px">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template #prefix>
                <a-icon type="arrow-up" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card>
            <a-statistic
              title="Idle"
              :value="9.3"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <a-icon type="arrow-down" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        style="width: 200px"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
        <a-select-option value="jack">
          Jack
        </a-select-option>
        <a-select-option value="lucy">
          Lucy
        </a-select-option>
        <a-select-option value="tom">
          Tom
        </a-select-option>
      </a-select>
    </div>
    <div style="width: 500px">
      <a-radio-group v-model="tabPosition" style="margin:8px">
        <a-radio-button value="top">
          top
        </a-radio-button>
        <a-radio-button value="bottom">
          bottom
        </a-radio-button>
        <a-radio-button value="left">
          left
        </a-radio-button>
        <a-radio-button value="right">
          right
        </a-radio-button>
      </a-radio-group>
      <a-tabs default-active-key="1" :tab-position="tabPosition">
        <a-tab-pane key="1" tab="Tab 1">
          Content of Tab 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2">
          Content of Tab 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          Content of Tab 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      tabPosition: 'top',
      dataSource: ["Lá", "2 dấu nhân", "3 dấu nhân"],
      startValue: null,
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
      spinning: false,
      routes: [
        {
          path: "index",
          breadcrumbName: "First-level Menu"
        },
        {
          path: "first",
          breadcrumbName: "Second-level Menu"
        },
        {
          path: "second",
          breadcrumbName: "Third-level Menu"
        }
      ],
      banks: [
        {
          id: 1,
          swiftCode: "EIBB",
          name: "Eximbanktang"
        },
        {
          id: 11,
          swiftCode: "ASCBVNVX",
          name: "ACB"
        },
        {
          id: 21,
          swiftCode: "BFTVVNVX",
          name: "VietcomBank"
        },
        {
          id: 31,
          swiftCode: "ICBVVNVX",
          name: "VietinBank"
        },
        {
          id: 41,
          swiftCode: "VTCBVNVX",
          name: "Techcombank"
        }
      ]
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    openNotificationWithIcon(type) {
      let info = {
        duration: 60000,
        class: type === "success" ? "success-notify" : "error-notify",
        message: "Thành công!",
        description: "Danh sách đã được làm mới"
      };
      this.$notification[type](info);
    },
    success() {
      this.$message.success("Danh sách đã được làm mới");
    },
    error() {
      this.$message.error("Ngân hàng không tồn tại");
    },
    warning() {
      this.$message.warning("This is a warning message");
    },
    info() {
      this.$message.info("This is a normal message");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toUpperCase()
          .indexOf(input.toUpperCase()) >= 0
      );
    },
    changeSpinning() {
      this.spinning = !this.spinning;
    },
    onChange(date, dateString) {
      console.log(date, dateString);
      console.log("kiki", this.startValue.format("DD-MM-YYYY"));
      console.log("moment", moment(this.startValue).format("DD-MM-YYYY"));
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}
.ant-alert {
  position: absolute;
  top: 2rem;
  right: 40%;
}

.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}

/* .my-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.ant-spin-nested-loading {
  height: 100%;
}
.ant-spin-container {
  height: 100%;
} */
</style>
