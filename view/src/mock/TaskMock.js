export function findPersonalTasks() {
    return [
        new Task(1, "Javaプロジェクトのボード"),
        new Task(2, "Kotlinプロジェクトのボード"),
        new Task(3, "Perlプロジェクトのボード"),
        new Task(4, "Goプロジェクトのボード")
    ]
}

export function findTeamTasks() {
    return [
        new Task(1111111, "ストーリーを考える"),
        new Task(2222222, "見積もりをする"),
        new Task(3333333, "テストを書く"),
        new Task(4444444, "実装をする"),
        new Task(5555555, "リリースする")
    ]
}

class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}