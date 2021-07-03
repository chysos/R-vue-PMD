<template>
	<view class="content">

		<view>
			<text class="title">{{title}}</text>
			<r-form :list="option" @get_form_data="get_form_data" form_ref="order_report_add_work_form_List"></r-form>
		</view>
	</view>
</template>

<script>
	import RForm from '@/components/R-form.vue'
	//import {R_form} from '@/compoments/R-form';
	export default {
		components: {
			RForm
		},
		data() {
			return {
				title: 'Hello R-vue',
				option: [{
						type: 1,
						label: "工单编号",
						name: "number",
						value: "",
						placeholder: "请输入工单编号",
						rules: [{
								required: true,
								message: "请输入工单编号",
								// 可以单个或者同时写两个触发验证方式
								trigger: "blur,change",
							},
							{
								min: 5,
								message: "工单编号不能少于5个字",
								trigger: "change,blur",
							},
						],
					},
					{
						type: 4,
						label: "维保开始时间",
						name: "createTime",
						placeholder: "单击选择开始时间",
						value: "",
						rules: [{
							required: true,
							message: "请输入开始时间",
							// 可以单个或者同时写两个触发验证方式
							trigger: "blur,change",
						}, ],
					},
					{
						type: 4,
						label: "维保结束时间",
						name: "planEndTime",
						placeholder: "单击选择结束时间",
						value: "",
						rules: [{
							required: true,
							message: "请输入结束时间",
							// 可以单个或者同时写两个触发验证方式
							trigger: "blur,change",
						}, ],
					},
					{
						type: 5,
						label: "设备类型",
						name: "type",
						select_list: [{
								value: "0",
								label: "铸轧机",
							},
							{
								value: "1",
								label: "退火炉",
							},
						],
						placeholder: "单击选择设备类型",
						value: "",
						rules: [{
							required: true,
							message: "请选择设备类型",
							// 可以单个或者同时写两个触发验证方式
							trigger: "blur,change",
						}, ],
					},
					{
						type: 6,
						label: "选择设备",
						name: "equipmentNum_name",
						parentName: "type",
						url: "/annealing/equipment/getByCndNoPageAndNoWork?type=",
						request_func: function(context, obj, callback) {
							let list = [];
							let temp = -1;
							switch (obj) {
								case "铸轧机":
									temp = 0;
									break;
								case "退火炉":
									temp = 1;
									break;
							}
							context
								.httpRequest(
									"/annealing/equipment/getByCndNoPageAndNoWork?type=" + temp,
									"",
									"GET"
								)
								.then((res) => {
									res.forEach((e) => {
										let obj = {
											label: e.equipmentNum + e.name,
											value: e.id,
										};
										list.push(obj);
									});
									this.equip_id_temp = res;
									callback(list);
								});
						},
						select_list: [],
						placeholder: "单击选择设备",
						value: "",
						rules: [{
							required: true,
							message: "请选择设备",
							// 可以单个或者同时写两个触发验证方式
							trigger: "blur,change",
						}, ],
					},
					{
						type: 7,
						label: "选择零部件",
						name: "select_component",
						click_func: function(context) {
							if (context.obj_temp["equipmentNum_name"] == undefined) {
								context.$refs.Form_Toast.show({
									title: "请先选择设备"
								});
							} else {
								uni.navigateTo({
									url: "/pages/equip/equip_cards/select_component?id=" +
										context.obj_temp["equipmentNum_name"],
								});
							}
						},
						btn_name: "单击选择零部件",
					},
				],
			}
		},
		onLoad() {

		},
		methods: {
			get_form_data(form_data) {
				this.form_data = form_data;
				console.log(this.form_data);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
