module Import -- モジュールImportを定義
    ( module Import -- 自分自身に定義した全ての関数とインポートしている別のモジュールを全てエクスポート
    ) where -- where以下はImportのメンバ等を定義

import Foundation            as Import -- モジュールFoundationをImportという別名でインポート
import Import.NoFoundation   as Import -- モジュールImport.NoFoundationをImportという別名でインポート
