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

instance ToJSON Task where
  toJSON (Task name) =
    object ["name" .= name]

taskN :: Task -> Text
taskN (Task x) = x


getAhoR :: Handler Value
getAhoR = do
  tasks <- runDB $ selectList [] [Asc TaskId]
  let task = Task { taskName = taskN(entityVal $ Prelude.head tasks)}
  jsonToRepJson $ trace (show tasks) $ task