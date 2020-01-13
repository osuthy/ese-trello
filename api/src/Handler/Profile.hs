{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Profile where

import Import

getProfileR :: Handler Html
getProfileR = do
    (_, user) <- requireAuthPair -- Monad (,)の値を取り出しつつパターンマッチして変数にバインド
    defaultLayout $ do
        setTitle . toHtml $ userIdent user <> "'s User page" -- 文字列結合
        $(widgetFile "profile")
