create table task (id VARCHAR(8) PRIMARY KEY, name VARCHAR(100));
insert into task values ('t1', 'テストを書く');
insert into task values ('t2', '実装する');
insert into task values ('t3', 'リリースする');

create table team (team_id VARCHAR(8) PRIMARY KEY, team_name VARCHAR(100));
insert into team values ('t1', 'Aチーム');
insert into team values ('t2', 'Bチーム');

-- 外部キーとかは一旦考えない
create table board_team (board_id VARCHAR(8) PRIMARY KEY, team_id VARCHAR(8), UNIQUE(board_id, team_id));
insert into board_team values ('b1', 't1');
insert into board_team values ('b2', 't2');

create table board (board_id VARCHAR(8) PRIMARY KEY, board_name VARCHAR(100));
insert into board values ('b1', 'Aチームの管理ボード');
insert into board values ('b2', 'Bチームの管理ボード');
