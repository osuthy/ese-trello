import React from 'react';

var personalTasks = [
    "Javaプロジェクトのボード",
    "Kotlinプロジェクトのボード",
    "Perlプロジェクトのボード",
    "Goプロジェクトのボード",
]

var teamTasks = [
    "ストーリーを考える",
    "見積もりをする",
    "テストを書く",
    "実装をする",
    "リリースする"
]

export function findPersonalTasks() {
    return personalTasks
}

export function findTeamTasks() {
    return teamTasks
}