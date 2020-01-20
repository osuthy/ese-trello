{-# LANGUAGE OverloadedStrings #-}
module Handler.Aho where

import Import

data Person = Person {
    name :: Text
    , age  :: Int
} deriving Show

instance ToJSON Person where
  toJSON (Person name age) = -- パターンマッチで引数に入ってきたPersonのnameとageを変数nameとageにバインド
    object ["name" .= name, "age" .= age]


getAhoR :: Handler Value
getAhoR = do
  task <- runDB $ selectList [] [Asc TaskId]
  let aho = Person { name = "aho", age = 12 }
  jsonToRepJson $ trace (show "ahoooooooo") $ aho