
<template>
    <view class="content">
        <button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
        <button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
        <button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
        <button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
        <button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        onLoad() {

        },
        methods: {
            checkIsSupportSoterAuthentication() {
                uni.checkIsSupportSoterAuthentication({
                    success(res) {
                        console.log(res);
                    },
                    fail(err) {
                        console.log(err);
                    },
                    complete(res) {
                        console.log(res);
                    }
                })
            },
            checkIsSoterEnrolledInDeviceFingerPrint() {
                uni.checkIsSoterEnrolledInDevice({
                    checkAuthMode: 'fingerPrint',
                    success(res) {
                        console.log(res);
                    },
                    fail(err) {
                        console.log(err);
                    },
                    complete(res) {
                        console.log(res);
                    }
                })
            },
            checkIsSoterEnrolledInDeviceFaceID() {
                uni.checkIsSoterEnrolledInDevice({
                    checkAuthMode: 'facial',
                    success(res) {
                        console.log(res);
                    },
                    fail(err) {
                        console.log(err);
                    },
                    complete(res) {
                        console.log(res);
                    }
                })
            },
            startSoterAuthenticationFingerPrint() {
                uni.startSoterAuthentication({
                    requestAuthModes: ['fingerPrint'],
                    challenge: '123456',
                    authContent: '请用指纹解锁',
                    success(res) {
                        console.log(res);
                    },
                    fail(err) {
                        console.log(err);
                    },
                    complete(res) {
                        console.log(res);
                    }
                })
            },
            startSoterAuthenticationFaceID() {
                uni.startSoterAuthentication({
                    requestAuthModes: ['facial'],
                    challenge: '123456',
                    authContent: '请用FaceID解锁',
                    success(res) {
                        console.log(res);
                    },
                    fail(err) {
                        console.log(err);
                    },
                    complete(res) {
                        console.log(res);
                    }
                })
            }
        }
    }
</script>

<style>
    button {
        width: 200px;
        margin: 20px auto;
    }
</style>
