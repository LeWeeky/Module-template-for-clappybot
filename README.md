# Module template for clappybot
A template to start creating your own clappybot module!

## 👀 Overview

This is a template for those who want to create their own [clappybot](https://github.com/LeWeeky/clappybot). There is no real features, just some example to help create yours.

## 📲 Installation

If you have not already done so, please follow installation of [clappybot](https://github.com/LeWeeky/clappybot) first.

Ok now, you can clone this repository into your clappybot project like this :
```bash
git clone https://github.com/LeWeeky/Module-template-for-clappybot.git sources/modules/templates
```

That's all there is to it! You can restart the bot and look at the new commands.

## 📑 Documentation

For the moment, there is only this readme to serve as documentation, but real documentation is being created.

🗂️ **Files & Folders**

`buttons` → for your buttons

`channels` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a channel is created
- those ending with `delete.js` will be automatically launched when a channel is deleted
- those ending with `update.js` will be automatically launched when a channel is updated

`commands` → for your commands

`members` → 3 types of files are possible :
- those ending with `join.js` will be automatically launched when a member joins a guild
- those ending with `leave.js` will be automatically launched when a member leaves a guild
- those ending with `update.js` will be automatically launched when a member is updated on a guild

`menus` → for your select menus

`messages` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a message is created
- those ending with `delete.js` will be automatically launched when a message is deleted
- those ending with `update.js` will be automatically launched when a message is updated

`modals` → for your modals (forms)

`models` → models are a quick and easy way of creating objects linked to your database; please read the example of the /models command to understand this

`presences` → to check presences updates (status & activities of users and bots)

`reactions` → 2 types of files are possible :
- those ending with `add.js` will be automatically launched when a reaction is added to a message
- those ending with `remove.js` will be automatically launched when a reaction is removed from a message

`tasks` → define recurring tasks such as an automatic message or checking for updates

`data.json` → name, emoji and description for the module

`init.js` → any functions to be started when the bot is launched to initialise the module

`utils` → You will notice that there is a `utils` folder, which is not automatically imported by the system, it is a totally optional folder which can have any other name (it doesn't matter) in which you save functions, classes or anything else that can be used in your module

**ℹ️ More informations**
- The only mandatory file for your module to be considered valid is `data.json` all the others are completely optional, if you don't need them you can delete them.
- Each folder can contain as many files as necessary, please take care for folders that manage several events (for example: create, update and delete events) to add the extension corresponding to the event in question (channel_**create**.js, channel_**update**.js, channel_**delete**.js)

## ⌨️ Commands

`/help` → basic explanations
`/models` → shows you how to create objects to interact with your database
`/ping` → a really simple command example
`/test` → allows you to test several interactions (menus, buttons, etc)

## 🛟 Help & Assistance

If you need any help, feel free to join our discord : 
https://discord.gg/UvQfUbk.

## 📜 Licence

Copyright 2025 LeWeeky

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.