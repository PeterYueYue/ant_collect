
<template>
    <yd-cell-group>
        <yd-cell-item arrow>
            <span slot="left">Time：</span>
            <yd-datetime type="time" v-model="datetime1" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
            <span slot="left">Day：</span>
            <yd-datetime type="day" v-model="datetime2" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
            <span slot="left">Month：</span>
            <yd-datetime type="month" v-model="datetime3" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
            <span slot="left">Date：</span>
            <yd-datetime type="date" v-model="datetime4" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
            <span slot="left">DateTime：</span>
            <yd-datetime type="datetime" v-model="datetime5" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
            <span slot="left">自定义模板：</span>
            <yd-datetime v-model="datetime6" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></yd-datetime>
        </yd-cell-item>
    </yd-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime1: '05:21',
                datetime2: '03-29',
                datetime3: '2016-06',
                datetime4: '2017-05-11',
                datetime5: '2017-05-11 06:06',
                datetime6: '2017-05-11',
                yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
                monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
                dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
            }
        }
    }
</script>