<template>
    <div class="list-container">
        <h1 class="list-title">Список студентів</h1>
        <div class="list-body">
            <div class="name-list">
                <h2 class="name-list__title">ПІБ</h2>
                <ul class="name-list__body">
                    <li class="name-list__item" v-for="student in filteredStudentsList" :key="student.id">{{ student.name }}</li>
                </ul>
            </div>
            <div class="score-list">
                <h2 class="score-list__title">Середній бал</h2>
                <ul class="score-list__body">
                    <li class="score-list__item" v-for="student in filteredStudentsList" :key="student.id">{{ student.averageScore }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'StudentsListComponent',
    computed: {
        ...mapGetters(['getStudentsList', 'getScoreType', 'getStudentCategory']),

        filteredStudentsList() {
            let list = JSON.parse(JSON.stringify(this.getStudentsList));
            let currentList = list;

            if (this.getStudentCategory !== null) {
                let currentCategory = parseInt(this.getStudentCategory);
                currentList = list.filter((student) => {
                    if (currentCategory <= 12) {
                        return (
                            student.averageScore >= currentCategory &&
                            student.averageScore < currentCategory + 3
                        );
                    } else {
                        return student.averageScore > 12;
                    }
                });
            }
            if (this.getScoreType === null || this.getScoreType === 12) {
                return currentList;
            } else {
                currentList.forEach((student) => {
                    student.averageScore = this.getScoreBy5Type(student.averageScore);
                });
                return currentList;
            }
        }
    },
    methods: {
        ...mapActions(['loadStudentsList']),
        getScoreBy5Type(score) {
            let res;
            if (score >= 13) res = 6;
            else if (score >= 10) res = 5;
            else if (score >= 7) res = 4;
            else if (score >= 5) res = 3;
            else res = 2;
            return res;
        },
    },
    created() {
        this.loadStudentsList();
    }
}
</script>

<style lang="scss" scoped>
.list-container {
    padding: 15px;
    display: inline-block;
}
.list-title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
    color: #67d65f;
}
.list-body {
    display: flex;
    align-items: flex-start;
    column-gap: 30px;
}
.name-list {

		// .name-list__title

		&__title {
            margin-bottom: 15px;
            text-align: center;
            font-weight: 600;
		}

		// .name-list__body

		&__body {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
		}

		// .name-list__item

		&__item {
		}
}
.score-list {

		// .score-list__title

		&__title {
            margin-bottom: 15px;
            text-align: center;
            font-weight: 600;
		}

		// .score-list__body

		&__body {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            align-items: center;
		}

		// .score-list__item

		&__item {
		}
}

</style>