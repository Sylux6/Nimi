/*
 * Copyright 2019 - 2020 Nathan Alo, Ayane Satomi, et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */
import EquipSkinTheme from "./model.equip.skin.theme";
import ShareCfgModel from "../model.sharecfg.base";
import ShareCfgModelList from "../model.sharecfg.list.base";

@ShareCfgModel.dependsOn([ "equipSkinThemes" ])
export default class EquipmentSkinThemeList extends ShareCfgModelList<EquipSkinTheme> {
    constructor() {
        super(EquipSkinTheme);
    }
}