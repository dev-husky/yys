var YYSMonster = function(){

    var instance = new Object();

    instance.init = function() {
        var monsterSelectList = $('#monsterList');
        monsterSelectList.empty();
        monsterSelectList.append('<option value="NONE">请选择想要查找的式神</option>')
        for (var i in MONSTER_OPTIONS) {
            monsterSelectList.append('<option value="' + MONSTER_OPTIONS[i] + '">' + MONSTER_OPTIONS[i] + '</option>');
        }

        $('#monsterList').show();

        var instanceSearchResult = this.listAllMonsterAsQueryInstanceResult();
        this.renderInstanceResult(instanceSearchResult);
    };

    instance.listAllMonsterAsQueryInstanceResult = function() {
        var resultItemList = new Array();
        for (var chapterIndex in INSTANCE_DATA) {
            var chapterDetail = INSTANCE_DATA[chapterIndex];
            var monsterGroupList = chapterDetail.monsterGroupList;
            resultItemList.push(new QueryInstanceResultItem(chapterDetail.chapter, null, chapterDetail.monsterGroupList));
        }
        return resultItemList;
    };

    instance.query = function() {
        var selectedMonster = $('#monsterList').val();
        var instanceSearchResult;
        if (selectedMonster == 'NONE') {
            instanceSearchResult = this.listAllMonsterAsQueryInstanceResult();
        } else {
            instanceSearchResult = this.searchInstance(selectedMonster);
        }
        this.renderInstanceResult(instanceSearchResult, selectedMonster);
    };

    instance.renderInstanceResult = function(instanceSearchResult, selectedMonster) {
        $('#queryInstanceResult').empty();
        var html = '';
        for (var i in instanceSearchResult) {
            html += this.renderInstanceResultItem(instanceSearchResult[i], selectedMonster);
        }
        $('#queryInstanceResult').append(html);
    };

    instance.searchInstance = function(monster) {
        var resultItemList = new Array();
        for (var chapterIndex in INSTANCE_DATA) {
            // chapterDetail 为一个章节
            var chapterDetail = INSTANCE_DATA[chapterIndex];
            //console.log("1:" + JSON.stringify(chapterDetail));
            // monsterGroupList 为一个章节中可能出现的怪的列表
            var monsterGroupList = chapterDetail.monsterGroupList;
            //console.log("2:" + JSON.stringify(monsterGroupList));
            // matchedGroupList 记录包含目标怪的怪
            var matchedGroupList = new Array();
            // chapterTotalCount 记录本章节中目标怪的数量
            var chapterTotalCount = 0;
            for (var groupIndex in monsterGroupList) {
                // monsterGroup 为章节中的一种怪
                var monsterGroup = monsterGroupList[groupIndex];
                //console.log("3:" + JSON.stringify(monsterGroup));
                // possibleMonsterList 为这种怪点进去后可能出现的怪的组合列表
                var possibleMonsterList = monsterGroup.possibleMonsterList;
                //console.log("4:" + JSON.stringify(possibleMonsterList));
                // groupAdded 记录当前 monsterGroup 是否已经被加到结果列表（防止一个monsterGroup有多层包含目标怪的情况下重复添加）
                var groupAdded = false;
                for (var monsterSetIndex in possibleMonsterList) {
                    // monsterSet 为怪点进去后的一种组合
                    var monsterSet = possibleMonsterList[monsterSetIndex];
                    //console.log("5:" + JSON.stringify(monsterSet));
                    for (var monsterFloorIndex in monsterSet) {
                        // monsterFloor 为这种组合的一层
                        var monsterFloor = monsterSet[monsterFloorIndex];
                        //console.log("6:" + JSON.stringify(monsterFloor));
                        for (var monsterIndex in monsterFloor) {
                            // monsterItem 为这一层中的一个怪
                            var monsterItem = monsterFloor[monsterIndex];
                            //console.log("7:" + JSON.stringify(monsterItem));
                            if (monsterItem.monster == monster) {
                                if (!groupAdded) {
                                    matchedGroupList.push(monsterGroup);
                                    groupAdded = true;
                                }
                                chapterTotalCount += monsterItem.number;
                            }
                        }
                    }
                }
            }
            resultItemList.push(new QueryInstanceResultItem(chapterDetail.chapter, chapterTotalCount, matchedGroupList));
        }
        return resultItemList;
    };

    instance.renderInstanceResultItem = function(instanceResultItem, targetMonster) {
        var html = '';
        for (var i in instanceResultItem.monsterGroupList) {
            html += '<tr>';
            // monsterGroup 为包含目标怪的怪
            var monsterGroup = instanceResultItem.monsterGroupList[i];
            if (i == 0) {
                html += '<td style="vertical-align: middle;width:20%;" rowspan="' + instanceResultItem.monsterGroupList.length + '">'
                    + '第 ' + instanceResultItem.chapter + ' 章'
                    //+ '<br>（' + instanceResultItem.totalCount + '）'
                    + '</td>';
            }
            html += '<td style="width:80%;">';
            //if (monsterGroup.isBoss) {
            //    html += '<td style="color:red;width:80%;">';
            //} else {
            //    html += '<td style="width:80%;">';
            //}
            html += monsterGroup.mainMonster;
            if (monsterGroup.isBoss) {
                html += '<span style="color:red;">（BOSS）</span>';
            }
            // possibleMonsterList 为这种怪点进去后可能出现的怪的组合列表
            var possibleMonsterList = monsterGroup.possibleMonsterList;
            for (var monsterSetIndex in possibleMonsterList) {
                html += '<br>（';
                // monsterSet 为怪点进去后的一种组合
                var monsterSet = possibleMonsterList[monsterSetIndex];
                for (var monsterFloorIndex in monsterSet) {
                    if (monsterFloorIndex > 0) {
                        html += ' / ';
                    }
                    // monsterFloor 为这种组合的一层
                    var monsterFloor = monsterSet[monsterFloorIndex];
                    for (var monsterIndex in monsterFloor) {
                        if (monsterIndex > 0) {
                            html += '；';
                        }
                        // monsterItem 为这一层中的一个怪
                        var monsterItem = monsterFloor[monsterIndex];
                        if (monsterItem.monster == targetMonster) {
                            html += '<span style="color:green;">';
                        }
                        html += monsterItem.monster + ' &times; ' + monsterItem.number;
                        html += '</span>';
                    }
                }
                html += '）';
            }
            html += '</td>';
            html += '</tr>';
        }
        return html;
    };

    return instance;
}();

var QueryInstanceResultItem = function(chapter, totalCount, monsterGroupList) {
    this.chapter = chapter;
    this.totalCount = totalCount;
    this.monsterGroupList = monsterGroupList;
}



