import{a as m,_ as i}from"./c-Bubble.vue_vue_type_script_setup_true_lang-B-A_lorO.js";import{_ as C}from"./c-Page.vue_vue_type_script_setup_true_lang-wrsE9xnw.js";import{l as b,m as k,a5 as _,e as h,q as v,D as r,n as s,k as n,G as t,p as e,Y as u,g as P,s as E,P as R,R as x,E as S}from"../bundle.js";import{s as o,_ as y,a as d}from"./c-Image.vue_vue_type_script_setup_true_lang-Ce_dY0XE.js";import{_ as V}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const O=""+new URL("../images/customvoting/customvoting2.jpg",import.meta.url).href,D={},A={class:"overflow-x-auto"};function I(f,p){return b(),k("div",A,p[0]||(p[0]=[_('<table class="min-w-full"><tbody><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/vote</code><br><p class="text-neutral-300">shows you the votelinks</p><em>permission: customvoting.vote</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/fakevote [player] [website]</code><br><p class="text-neutral-300">do a test or fake vote</p><em>permission: customvoting.fakevote</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/setvotes &lt;amount&gt; [player]</code><br><p class="text-neutral-300">change someone&#39;s votes</p><em>permission: customvoting.votes.set</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/clearmonthlyvotes [player]</code><br><p class="text-neutral-300">reset someone&#39;s period votes</p><em>permission: customvoting.monthly</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/votes [player]</code><br><p class="text-neutral-300">displays your or someone&#39;s current votes</p><em>permission: customvoting.votes[.others]</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/votetop</code><br><p class="text-neutral-300">displays the top voters</p><em>permission: customvoting.votetop</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/voteparty start | create</code><br><p class="text-neutral-300">start the vote party or receive the vote party chest</p><em>permission: customvoting.voteparty</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/votesettings</code><br><p class="text-neutral-300">a GUI based vote editor</p><em>permission: customvoting.settings</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/votereload [cache]</code><br><p class="text-neutral-300">reload the configuration (and cache)</p><em>permission: customvoting.reload</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/createtop &lt;top&gt;</code><br><p class="text-neutral-300">create an NPC for this top voter!</p><em>permission: customvoting.createtop</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/deletetop &lt;top&gt;</code><br><p class="text-neutral-300">delete the NPC of this top voter</p><em>permission: customvoting.deletetop</em></td></tr><tr><td class="px-6 py-4 whitespace-nowrap"><code class="text-red-500">/givecratekey &lt;player&gt; &lt;crateID&gt;</code><br><p class="text-neutral-300">give a crate key to a player</p><em>permission: customvoting.givekey</em></td></tr></tbody></table>',1)]))}const M=V(D,[["render",I]]),j={class:"flex justify-center m-5"},Y=h({__name:"General",setup(f){return(p,l)=>(b(),v(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Language"},{default:r(()=>l[0]||(l[0]=[t(" Change the plugin language "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,"English/English"),e("li",null,"Deutsch/German"),e("li",null,"Nederlands/Dutch")],-1)])),_:1}),s(n(o),{header:"Vote Top Sorting"},{default:r(()=>[l[1]||(l[1]=t(" Change who is the top voter of the moment ")),l[2]||(l[2]=e("br",null,null,-1)),l[3]||(l[3]=e("br",null,null,-1)),l[4]||(l[4]=t(" Options: ")),l[5]||(l[5]=e("ul",null,[e("li",null,"All Votes"),e("li",null,"Monthly Votes"),e("li",null,"Weekly Votes"),e("li",null,"Daily Votes")],-1)),e("div",j,[s(y,{src:"/images/customvoting/vote_top.png"})])]),_:1}),s(n(o),{header:"Sound Effects"},{default:r(()=>l[6]||(l[6]=[t(" Enable/disable sound effects (from CustomVoting) ")])),_:1}),s(n(o),{header:"Firework"},{default:r(()=>l[7]||(l[7]=[t(" Enable/disable firework effects ")])),_:1}),s(n(o),{header:"World Exclusion"},{default:r(()=>l[8]||(l[8]=[t(" Enable/disable players from receiving rewards in specific worlds ")])),_:1}),s(n(o),{header:"World Exclusion Setting (NEW!)",pt:{header:{class:"text-yellow-500"}}},{default:r(()=>l[9]||(l[9]=[t(" Change what happens with the 'World Exclusion' list "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,"Blacklist"),e("li",null,"Whitelist")],-1)])),_:1}),s(n(o),{header:"Danger Zone"},{default:r(()=>[l[14]||(l[14]=t(" Settings you shouldn't touch without knowing what it does ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"UUID Storage"},{default:r(()=>l[10]||(l[10]=[t(" Enable/disable UUID Storage "),e("br",null,null,-1),t(" Turn on if: you are running a cracked (non-premium) Minecraft server "),e("br",null,null,-1),e("br",null,null,-1),t(" This settings means that your players will be identified by their playername. It is adviced to password protect these kind of servers, to prevent duplicate playernames from joining your server. ")])),_:1}),s(n(o),{header:"Database"},{default:r(()=>l[11]||(l[11]=[t(" Enable/disable the usage of a database instead of data files "),e("br",null,null,-1),e("br",null,null,-1),t(" Useful if you want to share your CustomVoting data across multiple subservers. "),e("br",null,null,-1),e("br",null,null,-1),t(" Restart or reload the server after changing. Note that you need to setup your database connection in the "),e("b",null,"settings.yml",-1),t(" file. ")])),_:1}),s(n(o),{header:"Merge duplicates"},{default:r(()=>l[12]||(l[12]=[t(" Merge playerfiles that are duplicate "),e("br",null,null,-1),e("br",null,null,-1),t(" This command is dangerous, as it deleted playerfiles or database rows from players who have the same username. ")])),_:1}),s(n(o),{header:"Prefix Support"},{default:r(()=>l[13]||(l[13]=[t(" Enable prefix support for player usernames "),e("br",null,null,-1),e("br",null,null,-1),t(" This setting is required when you're hosting a server with software that adds a prefix in front of your player's usernames. "),e("br",null,null,-1),t(" For example Gesyer adds a dot in front of a username: "),e("i",null,"sd_master92",-1),t(" will become "),e("i",null,".sd_master92",-1)])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Process Vote Delay"},{default:r(()=>l[15]||(l[15]=[t(" Delay the rewards from being given after a player has voted ")])),_:1})]),_:1},8,["onTabOpen"]))}}),L={class:"flex justify-center m-5"},N={class:"flex justify-center m-5"},$=h({__name:"Rewards",setup(f){return(p,l)=>(b(),v(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Vote Rewards"},{default:r(()=>[l[6]||(l[6]=t(" Default rewards for your players ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Item Rewards"},{default:r(()=>[l[0]||(l[0]=t(" Place items in this inventory to set as item rewards ")),e("div",L,[s(y,{src:"/images/customvoting/item_rewards.png"})])]),_:1}),s(n(o),{header:"Item Reward Type"},{default:r(()=>l[1]||(l[1]=[t(" Define how many items a player receives "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,"All Items"),e("li",null,"Random Item")],-1)])),_:1}),s(n(o),{header:"Money Reward"},{default:r(()=>l[2]||(l[2]=[t(" Define how much ingame currency a player receives "),e("br",null,null,-1),e("br",null,null,-1),t(" This requires "),e("b",null,"Vault",-1),t(" and a Vault-supported currency plugin to be setup. E.g. "),e("b",null,"EssentialsX",-1),t(". ")])),_:1}),s(n(o),{header:"XP Reward"},{default:r(()=>l[3]||(l[3]=[t(" Define how much Minecraft experience a player receives ")])),_:1}),s(n(o),{header:"Double Rewards (NEW!)",pt:{header:{class:"text-yellow-500"}}},{default:r(()=>l[4]||(l[4]=[t(" Setup days with double rewards "),e("br",null,null,-1),e("br",null,null,-1)])),_:1}),s(n(o),{header:"Command Rewards"},{default:r(()=>l[5]||(l[5]=[t(" You can choose what commands need to be run when a player has voted "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Power Rewards"},{default:r(()=>[l[15]||(l[15]=t(" Alternative vote rewards for VIP's ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Item Rewards"},{default:r(()=>[l[7]||(l[7]=t(" Place items in this inventory to set as item rewards ")),e("div",N,[s(y,{src:"/images/customvoting/item_rewards.png"})])]),_:1}),s(n(o),{header:"Item Reward Type"},{default:r(()=>l[8]||(l[8]=[t(" Define how many items a player receives "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,"All Items"),e("li",null,"Random Item")],-1)])),_:1}),s(n(o),{header:"Money Reward"},{default:r(()=>l[9]||(l[9]=[t(" Define how much ingame currency a player receives "),e("br",null,null,-1),e("br",null,null,-1),t(" This requires "),e("b",null,"Vault",-1),t(" and a Vault-supported currency plugin to be setup. E.g. "),e("b",null,"EssentialsX",-1),t(". ")])),_:1}),s(n(o),{header:"XP Reward"},{default:r(()=>l[10]||(l[10]=[t(" Define how much Minecraft experience a player receives ")])),_:1}),s(n(o),{header:"Double Rewards (NEW!)",pt:{header:{class:"text-yellow-500"}}},{default:r(()=>l[11]||(l[11]=[t(" Setup days with double rewards "),e("br",null,null,-1),e("br",null,null,-1)])),_:1}),s(n(o),{header:"Command Rewards"},{default:r(()=>l[12]||(l[12]=[t(" You can choose what commands need to be run when a player has voted "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1}),s(n(o),{header:"Enabled Groups"},{default:r(()=>l[13]||(l[13]=[t(" What permission-groups have access to the "),e("b",null,"Power Rewards",-1),t("? "),e("br",null,null,-1),e("br",null,null,-1),t(" This only works in combination with "),e("b",null,"Vault",-1),t(" and a Vault-supported permissions plugin. E.g. "),e("b",null,"LuckPerms",-1),t(". ")])),_:1}),s(n(o),{header:"Enabled Users"},{default:r(()=>l[14]||(l[14]=[t(" Who has access to the "),e("b",null,"Power Rewards",-1),t("? "),e("br",null,null,-1),e("br",null,null,-1),t(" This setting overrides the "),e("b",null,"Enabled Groups",-1),t(" setting. ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Lucky Rewards"},{default:r(()=>[l[20]||(l[20]=t(" Rewards for lucky players ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Lucky Vote"},{default:r(()=>l[16]||(l[16]=[t(" Enable/disable lucky voting ")])),_:1}),s(n(o),{header:"Item Rewards"},{default:r(()=>l[17]||(l[17]=[t(" Place items in this inventory to set as item rewards ")])),_:1}),s(n(o),{header:"Chance"},{default:r(()=>l[18]||(l[18]=[t(" Set the chance percentage (%) for receiving a lucky reward ")])),_:1}),s(n(o),{header:"Command Rewards (NEW!)",pt:{header:{class:"text-yellow-500"}}},{default:r(()=>l[19]||(l[19]=[t(" You can choose what commands need to be run when a player has voted "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Milestones"},{default:r(()=>[l[24]||(l[24]=t(" Rewards given when a player reaches a certain amount of votes ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Item Rewards"},{default:r(()=>l[21]||(l[21]=[t(" Place items in this inventory to set as item rewards ")])),_:1}),s(n(o),{header:"Command Rewards"},{default:r(()=>l[22]||(l[22]=[t(" You can choose what commands need to be run when a player has voted "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1}),s(n(o),{header:"Permission Rewards"},{default:r(()=>l[23]||(l[23]=[t(" Define what permissions are given to a player after voting"),e("br",null,null,-1),e("br",null,null,-1),t(" This only works in combination with "),e("b",null,"Vault",-1),t(" and a Vault-supported permissions plugin. E.g. "),e("b",null,"LuckPerms",-1),t(". ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Streaks"},{default:r(()=>[l[29]||(l[29]=t(" Rewards given when a player votes x days in a row ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Require Consecutive Streak"},{default:r(()=>l[25]||(l[25]=[t(" Does the player need to vote every day, or can the player continue his streak on a later moment as well? ")])),_:1}),s(n(o),{header:"Item Rewards"},{default:r(()=>l[26]||(l[26]=[t(" Place items in this inventory to set as item rewards ")])),_:1}),s(n(o),{header:"Command Rewards"},{default:r(()=>l[27]||(l[27]=[t(" You can choose what commands need to be run when a player has voted "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1}),s(n(o),{header:"Permission Rewards"},{default:r(()=>l[28]||(l[28]=[t(" Define what permissions are given to a player after voting"),e("br",null,null,-1),e("br",null,null,-1),t(" This only works in combination with "),e("b",null,"Vault",-1),t(" and a Vault-supported permissions plugin. E.g. "),e("b",null,"LuckPerms",-1),t(". ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Vote Party"},{default:r(()=>[l[37]||(l[37]=t(" Chests with possibilities ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Vote Party"},{default:r(()=>l[30]||(l[30]=[t(" Enable/disable the "),e("b",null,"Vote Party",-1)])),_:1}),s(n(o),{header:"Party Type"},{default:r(()=>l[31]||(l[31]=[t(" What type of party do you want to organize? "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,[t(" Random Chest at a Time"),e("br"),e("i",null,[t("The items drop out of your "),e("b",null,"Vote Party"),t(" chests one by one, in random order")])]),e("br"),e("li",null,[t(" All Chests at Once"),e("br"),e("i",null,[t("The items drop out of your "),e("b",null,"Vote Party"),t(" chests one by one, concurrently")])]),e("br"),e("li",null,[t(" One Chest at a Time"),e("br"),e("i",null,[t("The items drop out of your "),e("b",null,"Vote Party"),t(" chests one by one, in sequence")])]),e("br"),e("li",null,[t(" Add To Inventory"),e("br"),e("i",null,[t("The items from your "),e("b",null,"Vote Party"),t(" chests are given in your players' inventories one by one, in a random order ")])]),e("br"),e("li",null,[t(" Explode Chests"),e("br"),e("i",null,[t("The items drop out of your "),e("b",null,"Vote Party"),t(" one chest at a time, in random order")])]),e("br"),e("li",null,[t(" Scary"),e("br"),e("i",null,[t("Similar to the "),e("b",null,"Explode Chests"),t(" variant, but a little scarrier")])]),e("br"),e("li",null,[t(" Pig Hunt"),e("br"),e("i",null,"This time, your chests run away! Kill the pigs to receive the rewards.")]),e("br"),e("li",null,[t(" Locked Crates"),e("br"),e("i",null,"The chests can be claimed by a single player. Fun as a hide-and-seek variant!")]),e("br"),e("li",null,"Randomly (one of the above)")],-1)])),_:1}),s(n(o),{header:"Vote Party Commands"},{default:r(()=>l[32]||(l[32]=[t(" You can choose what commands need to be run when the "),e("b",null,"Vote Party",-1),t(" has started "),e("br",null,null,-1),e("br",null,null,-1),t(" Keep in mind that this feature can be abused by moderators who have access to the "),e("b",null,"/votesettings",-1),t(" command. For this reason it is possible to setup "),e("i",null,"forbidden_commands",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1}),s(n(o),{header:"Votes Required"},{default:r(()=>l[33]||(l[33]=[t(" The amount of votes on your server that are required to start the "),e("b",null,"Vote Party",-1),e("br",null,null,-1),e("br",null,null,-1),t(" The count resets once the party has started. ")])),_:1}),s(n(o),{header:"Chests"},{default:r(()=>l[34]||(l[34]=[t(" Place items in this inventory to set as item rewards ")])),_:1}),s(n(o),{header:"Pig Hunt Health"},{default:r(()=>l[35]||(l[35]=[t(" The amount of lives a pig has in the "),e("b",null,"Vote Party",-1),t(" type "),e("i",null,"Pig Hunt",-1)])),_:1}),s(n(o),{header:"Pig Hunt Max-Damage"},{default:r(()=>l[36]||(l[36]=[t(" The amount of lives a pig can take from a player in the "),e("b",null,"Vote Party",-1),t(" type "),e("i",null,"Pig Hunt",-1)])),_:1})]),_:1},8,["onTabOpen"])]),_:1}),s(n(o),{header:"Crates"},{default:r(()=>[l[43]||(l[43]=t(" Special chest that give the player one item after opening it ")),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Change Name"},{default:r(()=>l[38]||(l[38]=[t(" Change the name of this "),e("b",null,"Crate",-1)])),_:1}),s(n(o),{header:"Get Key/Crate"},{default:r(()=>l[39]||(l[39]=[t(" You will be given a "),e("b",null,"Crate",-1),t(" key "),e("br",null,null,-1),e("br",null,null,-1),t(" This key can be used to set the crate location, or to open a crate. ")])),_:1}),s(n(o),{header:"Item Rewards"},{default:r(()=>l[40]||(l[40]=[t(" Place items in this inventory to set as item rewards "),e("br",null,null,-1),e("br",null,null,-1),t(" Note the chance percentage of each inventory. "),e("br",null,null,-1),e("br",null,null,-1),t(" Options: "),e("ul",null,[e("li",null,"50%"),e("li",null,"25%"),e("li",null,"10%"),e("li",null,"5%"),e("li",null,"1%"),e("li",null,"No prize (9%)")],-1)])),_:1}),s(n(o),{header:"Always Reward"},{default:r(()=>l[41]||(l[41]=[t(" Is it possible that a player receives no reward? ")])),_:1}),s(n(o),{header:"Allow Crate Close"},{default:r(()=>l[42]||(l[42]=[t(" Can the "),e("b",null,"Crate",-1),t(" animation be skipped? ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1})]),_:1},8,["onTabOpen"]))}}),W={class:"flex justify-center m-5"},F={class:"flex justify-center m-5"},H={class:"flex justify-center m-5"},q=h({__name:"Messages",setup(f){return(p,l)=>(b(),v(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Vote Broadcast"},{default:r(()=>l[0]||(l[0]=[t(" Toggle the 'player has voted' message ")])),_:1}),s(n(o),{header:"Milestone Broadcast"},{default:r(()=>l[1]||(l[1]=[t(" Toggle the 'player has reached milestone x' message ")])),_:1}),s(n(o),{header:"Streak Broadcast"},{default:r(()=>l[2]||(l[2]=[t(" Toggle the 'player hit votestreak x' message ")])),_:1}),s(n(o),{header:"Vote Party Votes Broadcast"},{default:r(()=>l[3]||(l[3]=[t(" Toggle the 'x votes left until the Vote Party' message ")])),_:1}),s(n(o),{header:"Vote Party Count Broadcast"},{default:r(()=>l[4]||(l[4]=[t(" Toggle the 'Vote Party starting in x seconds' message ")])),_:1}),s(n(o),{header:"Vote Party Count Ending Broadcast"},{default:r(()=>l[5]||(l[5]=[t(" Toggle the 'Vote Party starting in x' message ")])),_:1}),s(n(o),{header:"Break Armorstand Message"},{default:r(()=>l[6]||(l[6]=[t(" Toggle the 'don't break me' message"),e("br",null,null,-1),e("br",null,null,-1),t(" This message is triggered if a player tries to break a "),e("b",null,"Vote Top",-1),t(". ")])),_:1}),s(n(o),{header:"Disabled World Message"},{default:r(()=>l[7]||(l[7]=[t(" Toggle the 'you can't vote in this world' message"),e("br",null,null,-1),e("br",null,null,-1),t(" This message is triggered if a player tries to vote in a world that is disabled in "),e("i",null,"disabled_worlds",-1),t(" in the "),e("b",null,"settings.yml",-1),t(". ")])),_:1}),s(n(o),{header:"Hourly Vote Reminder"},{default:r(()=>l[8]||(l[8]=[t(" Toggle the 'you haven't voted yet' message ")])),_:1}),s(n(o),{header:"Vote Sites"},{default:r(()=>l[9]||(l[9]=[t(" Here you can configure your server's vote sites "),e("br",null,null,-1),e("br",null,null,-1),t(" Note: a "),e("b",null,"Vote Site",-1),t(" become available after voting a first time. "),e("br",null,null,-1),e("br",null,null,-1),t(" Actions: "),e("ul",null,[e("li",null,[t(" Right Click"),e("br"),e("i",null,[t("Edit a "),e("b",null,"Vote Site"),t(" - the editor will open")])]),e("li",null,[t(" Left Click (with an item)"),e("br"),e("i",null,[t("Change a "),e("b",null,"Vote Site"),t("'s type")])]),e("li",null,[t(" Drag"),e("br"),e("i",null,[t("Move a "),e("b",null,"Vote Site"),t(" to another position")])]),e("li",null,[t(" Cursor Click"),e("br"),e("i",null,[t("Disable a "),e("b",null,"Vote Site")])])],-1)])),_:1}),s(n(o),{header:"Vote Site Inventory"},{default:r(()=>[l[10]||(l[10]=t(" Whether a player sees your vote sites in an inventory/GUI, or as a text message ")),l[11]||(l[11]=e("br",null,null,-1)),l[12]||(l[12]=e("br",null,null,-1)),l[13]||(l[13]=t(" This action is triggered with ")),l[14]||(l[14]=e("b",null,"/vote",-1)),l[15]||(l[15]=t(". ")),e("div",W,[s(y,{src:"/images/customvoting/vote_command_gui.png"})]),e("div",F,[s(y,{src:"/images/customvoting/vote_command_chat.png"})])]),_:1}),s(n(o),{header:"Vote Command Override"},{default:r(()=>l[16]||(l[16]=[t(" Show auto-generated vote sites to the player or use your own message? "),e("br",null,null,-1),e("br",null,null,-1),t(" Your own message can be setup at "),e("i",null,"vote_command_override",-1),t(" in the "),e("b",null,"messages.yml",-1),t(". This option is only available if "),e("b",null,"Vote Site Inventory",-1),t(" is disabled. ")])),_:1}),s(n(o),{header:"Vote Dashboard"},{default:r(()=>[l[17]||(l[17]=t(" Whether a player sees their vote stats in an inventory/GUI, or as a text message ")),l[18]||(l[18]=e("br",null,null,-1)),l[19]||(l[19]=e("br",null,null,-1)),l[20]||(l[20]=t(" This action is triggered with ")),l[21]||(l[21]=e("b",null,"/votes",-1)),l[22]||(l[22]=t(". ")),e("div",H,[s(y,{src:"/images/customvoting/vote_dashboard.png"})])]),_:1})]),_:1},8,["onTabOpen"]))}}),U=h({__name:"Support",setup(f){return(p,l)=>(b(),v(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Up to date?"},{default:r(()=>l[0]||(l[0]=[t(" Whether or not this plugin is up to date "),e("br",null,null,-1),e("br",null,null,-1),t(" The current version is also shown. ")])),_:1}),s(n(o),{header:"Ingame Updates"},{default:r(()=>l[1]||(l[1]=[t(" Will operators receive a message about an available update from time to time? ")])),_:1}),s(n(o),{header:"Discord"},{default:r(()=>l[2]||(l[2]=[t(" A link to the "),e("a",{href:"https://discord.gg/v3qmJu7jWD",target:"_blank"}," Discord server ",-1),e("br",null,null,-1),e("br",null,null,-1),t(" Here you are welcome to ask for support ")])),_:1}),s(n(o),{header:"Supporters"},{default:r(()=>l[3]||(l[3]=[t(" Who made this plugin possible, and who bought me a coffee? "),e("br",null,null,-1),e("br",null,null,-1),e("ul",null,[e("li",null,"sd_master92"),e("li",null,"Dutchbeard"),e("li",null,"Smirren"),e("li",null,"King_Tom_94")],-1)])),_:1}),s(n(o),{header:"Player Info"},{default:r(()=>l[4]||(l[4]=[t(" View all voting statistics about your players ")])),_:1}),s(n(o),{header:"Statistics"},{default:r(()=>[s(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Top vote sites"},{default:r(()=>l[5]||(l[5]=[t(" A list of the most popular voting sites of "),e("b",null,"CustomVoting",-1),t(" users at this moment "),e("br",null,null,-1),e("br",null,null,-1),e("span",{class:"text-green-500"},"Green",-1),t(" sites have been setup on your own server, "),e("span",{class:"text-red-500"},"red",-1),t(" sites have not yet been setup. ")])),_:1}),s(n(o),{header:"Minecraft Version"},{default:r(()=>l[6]||(l[6]=[t(" A list of the most popular Minecraft versions of "),e("b",null,"CustomVoting",-1),t(" users at this moment ")])),_:1}),s(n(o),{header:"Country"},{default:r(()=>l[7]||(l[7]=[t(" A list of the most popular countries of "),e("b",null,"CustomVoting",-1),t(" users at this moment ")])),_:1})]),_:1},8,["onTabOpen"])]),_:1})]),_:1},8,["onTabOpen"]))}}),B=h({__name:"VoteSettings",setup(f){return(p,l)=>(b(),v(n(d),{onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"General"},{default:r(()=>[s(Y)]),_:1}),s(n(o),{header:"Rewards"},{default:r(()=>[s($)]),_:1}),s(n(o),{header:"Messages"},{default:r(()=>[s(q)]),_:1}),s(n(o),{header:"Support"},{default:r(()=>[s(U)]),_:1})]),_:1},8,["onTabOpen"]))}}),G={class:"flex flex-wrap"},K={class:"w-full md:w-fit"},z={class:"flex justify-center"},X={class:"flex justify-center"},J={class:"ms-10 mt-10 w-full xl:w-2/3"},Z={class:"flex justify-center"},Q={class:"flex"},ee={class:"w-full md:w-1/2"},te={class:"mt-3 flex flex-wrap gap-1 md:gap-2 font-bold"},le={class:"mt-3 flex flex-wrap gap-1 md:gap-2 font-bold"},se={class:"flex justify-center"},ne={class:"w-full md:w-1/2 mt-10 flex justify-center flex-wrap gap-1 md:gap-2 font-bold"},re={class:"flex justify-end"},oe={class:"w-full md:w-1/2 mt-10 flex justify-end flex-wrap gap-1 md:gap-2 font-bold"},ae={class:"flex justify-center"},ie={class:"mt-3"},ue={class:"flex justify-center m-5"},de={class:"flex justify-center"},pe={class:"mt-10"},me={class:"flex justify-center"},be={class:"flex justify-center"},fe={class:"flex justify-center"},ge={class:"flex justify-center"},ye=h({__name:"CustomVoting",setup(f){const p=P(),{routeLoading:l}=E(p),g=c=>{const a=document.getElementById(c);a==null||a.scrollIntoView({behavior:"smooth",block:"center"})};return(c,a)=>{const T=R("RouterLink");return b(),v(C,{"scroll-to-content":!1},{header:r(()=>[e("div",G,[e("div",K,[s(T,{to:{name:n(x).HOME}},{default:r(()=>[e("img",{class:S(["w-32 h-32 md:w-48 md:h-48 rounded-full animation-scale my-4 cursor-pointer",{"animate-spin":n(l)===n(x).HOME}]),src:O,alt:"customvoting"},null,2)]),_:1},8,["to"])]),a[7]||(a[7]=e("div",{class:"w-full md:w-fit md:ms-10 flex justify-start"},[e("div",{class:"place-self-center"},[e("h1",{class:"text-title-primary"},"CustomVoting"),e("h2",{class:"text-title-tertiary"},"Everything you need to setup voting for your server.")])],-1))])]),content:r(()=>[e("div",z,[s(m,{class:"!bg-yellow-700 !bg-opacity-50 my-5 w-full xl:w-2/3",title:"About",description:"CustomVoting is a Minecraft plugin to reward your players for voting for your server.","description-props":{class:"!text-neutral-200"}},{default:r(()=>a[8]||(a[8]=[e("p",{class:"mt-3 description-with-bolds text-neutral-200"},[t(" The main focus of this plugin is being "),e("b",null,"easy to setup"),t(" and "),e("b",null,"not"),t(" being "),e("b",null,"overcomplicated"),t(" to use, but still being "),e("b",null,"highly customizable"),t("! ")],-1)])),_:1})]),a[31]||(a[31]=e("div",{class:"flex justify-center"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4F9jAmt5UFM?si=fJdNijoA_RMDxGN-",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})],-1)),e("div",X,[e("div",J,[a[10]||(a[10]=e("h3",{class:"text-title-secondary mb-2"},"Contents",-1)),e("ul",null,[e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[0]||(a[0]=w=>g("features"))}," Features ")]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[1]||(a[1]=w=>g("votesettings"))},a[9]||(a[9]=[e("b",null,"/votesettings",-1)]))]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[2]||(a[2]=w=>g("requirements"))}," Requirements & Hooks ")]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[3]||(a[3]=w=>g("commands"))}," Commands & Permissions")]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[4]||(a[4]=w=>g("setup"))}," Setup & Configuration")]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[5]||(a[5]=w=>g("support"))}," Support & Information")]),e("li",null,[e("a",{class:"hover:cursor-pointer",onClick:a[6]||(a[6]=w=>g("love"))}," Footnotes")])])])]),e("div",Z,[s(m,{id:"features",class:"my-5 mt-20 w-full xl:w-2/3",title:"Features"},{default:r(()=>[e("div",Q,[e("div",ee,[e("div",te,[s(i,{label:"Items"}),s(i,{class:"bg-sky-500",label:"Money"}),s(i,{class:"bg-blue-300 text-neutral-700 hover:text-white",label:"Experience"}),s(i,{class:"bg-cyan-600",label:"Commands"}),s(i,{class:"bg-blue-600",label:"Permissions"})]),e("div",le,[s(i,{class:"bg-purple-600",label:"VIP Rewards"}),s(i,{class:"bg-purple-400 text-neutral-700 hover:text-white",label:"Lucky Rewards"}),s(i,{class:"bg-purple-800",label:"Milestones"}),s(i,{class:"bg-fuchsia-400 text-neutral-700 hover:text-white",label:"Streaks"}),s(i,{class:"bg-purple-900",label:"Crates"})])])]),e("div",se,[e("div",ne,[s(i,{class:"bg-green-400 text-neutral-700 hover:text-white",label:"Vote Party"}),s(i,{class:"bg-yellow-300 text-neutral-700 hover:text-white",label:"Pig Hunt"}),s(i,{class:"bg-amber-500 text-neutral-700 hover:text-white",label:"Fireworks"}),s(i,{class:"bg-orange-400 text-neutral-700 hover:text-white",label:"Vote Top Skulls"}),s(i,{class:"bg-lime-500 text-neutral-700 hover:text-white",label:"NPC's"})])]),e("div",re,[e("div",oe,[s(i,{class:"bg-red-400 text-neutral-700 hover:text-white",label:"Offline Support"}),s(i,{class:"bg-pink-300 text-neutral-700 hover:text-white",label:"Monthly Reset"}),s(i,{class:"bg-pink-700",label:"PlaceholderAPI"}),s(i,{class:"bg-red-400 text-neutral-700 hover:text-white",label:"Vault"}),s(i,{class:"bg-red-700",label:"NuVotifier"})])])]),_:1})]),e("div",ae,[s(m,{id:"votesettings",class:"my-5 mt-20 w-full xl:w-2/3",title:"/votesettings",description:"The main command of CustomVoting"},{default:r(()=>[e("div",ie,[s(B)]),e("div",ue,[s(y,{src:"/images/customvoting/votesettings1.png"})])]),_:1})]),e("div",de,[s(m,{id:"requirements",class:"my-5 mt-20 w-full xl:w-2/3",title:"Requirements & Hooks",description:"What do you need to use CustomVoting - and what works together with it?"},{default:r(()=>[a[26]||(a[26]=e("div",{class:"mt-3"},[t(" Requirements "),e("br"),e("br"),e("ul",null,[e("li",null,[e("span",{class:"text-green-500"},[e("b",null,"Minecraft")]),t(" 1.14 or higher ")]),e("li",null,[e("span",{class:"text-cyan-400"},[e("b",null,"NuVotifier")]),t(" or "),e("span",{class:"text-cyan-400"},[e("b",null,"Votifier")])])])],-1)),e("div",pe,[a[23]||(a[23]=t(" Hooks: ")),a[24]||(a[24]=e("br",null,null,-1)),a[25]||(a[25]=e("br",null,null,-1)),e("ul",null,[a[12]||(a[12]=e("li",null,[e("b",{class:"text-orange-400"},"PlaceholderAPI")],-1)),s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"What are the placeholders?"},{default:r(()=>a[11]||(a[11]=[e("div",{class:""},[e("p",null,[t("%CV_SERVER_VOTES% "),e("span",{class:"text-neutral-400"},"// total server votes")]),e("p",null,[t("%CV_PLAYER_VOTES% "),e("span",{class:"text-neutral-400"},"// your votes")]),e("p",null,[t("%CV_PLAYER_VOTES_MONTHLY% "),e("span",{class:"text-neutral-400"},"// your monthly votes")]),e("p",null,[t("%CV_PLAYER_VOTES_WEEKLY% "),e("span",{class:"text-neutral-400"},"// your weekly votes")]),e("p",null,[t("%CV_PLAYER_VOTES_DAILY% "),e("span",{class:"text-neutral-400"},"// your daily votes")]),e("p",null,[t("%CV_PLAYER_STREAK_DAILY% "),e("span",{class:"text-neutral-400"},"// your streak days")]),e("br"),e("p",null,[t("%CV_PLAYER_VOTES_1% "),e("span",{class:"text-neutral-400"},"// top voter 1's votes")]),e("p",null,[t("%CV_PLAYER_VOTES_1_NAME% "),e("span",{class:"text-neutral-400"},"// top voter 1's name")]),e("p",null,[t(" %CV_PLAYER_VOTES_1_MONTHLY% "),e("span",{class:"text-neutral-400"},"// top voter 1's monthly votes")]),e("p",null,[t(" %CV_PLAYER_VOTES_1_WEEKLY% "),e("span",{class:"text-neutral-400"},"// top voter 1's weekly votes")]),e("p",null,[t("%CV_PLAYER_VOTES_1_DAILY% "),e("span",{class:"text-neutral-400"},"// top voter 1's daily votes")]),e("p",{class:"text-neutral-300"},"You can use as many numbers as you like"),e("p",{class:"text-neutral-300"}," The top voters are sorted by month or all-time according to your 'Monthly Period' setting. (Default is all-time) "),e("br"),e("p",null,[t(" %CV_VOTE_PARTY_TOTAL% "),e("span",{class:"text-neutral-400"},"// total of votes required for a voteparty.")]),e("p",null,[t("%CV_VOTE_PARTY_CURRENT% "),e("span",{class:"text-neutral-400"},"// votes current period.")]),e("p",null,[t(" %CV_VOTE_PARTY_UNTIL% "),e("span",{class:"text-neutral-400"},"// votes left until the voteparty.")])],-1)])),_:1})]),_:1},8,["onTabOpen"]),a[13]||(a[13]=e("li",null,[e("b",{class:"text-orange-400"},"Vault")],-1)),a[14]||(a[14]=e("i",null,"Connect with a Vault-supported currency or permissions plugin",-1)),a[15]||(a[15]=e("br",null,null,-1)),a[16]||(a[16]=e("br",null,null,-1)),a[17]||(a[17]=e("li",null,[e("b",{class:"text-orange-400"},"Citizens")],-1)),a[18]||(a[18]=e("i",null,"Showcase your top voters with reallife NPC's!",-1)),a[19]||(a[19]=e("br",null,null,-1)),a[20]||(a[20]=e("br",null,null,-1)),a[21]||(a[21]=e("li",null,[e("b",{class:"text-orange-400"},"Multiverse-Core")],-1)),a[22]||(a[22]=e("i",null,"Disable players from voting in certain custom worlds.",-1))])])]),_:1})]),e("div",me,[s(m,{id:"commands",class:"my-5 mt-20 w-full xl:w-2/3",title:"Commands & Permissions"},{default:r(()=>[s(n(d),{class:"mt-3",onTabOpen:n(u)},{default:r(()=>[s(n(o),{header:"Show/hide"},{default:r(()=>[s(M)]),_:1})]),_:1},8,["onTabOpen"]),a[27]||(a[27]=e("p",{class:"mt-3"},[t(" Reference: "),e("a",{href:"https://github.com/sanderderks/CustomVoting/blob/master/src/main/resources/plugin.yml",target:"_blank"}," plugin.yml ")],-1))]),_:1})]),e("div",be,[s(m,{id:"setup",class:"my-5 mt-20 w-full xl:w-2/3",title:"Setup & Configuration"},{default:r(()=>a[28]||(a[28]=[e("div",{class:"flex md:justify-center md:text-center mb-15"},[e("div",null,[e("h4",{class:"w-full text-title-tertiary text-primary-500"},"Basic Setup"),e("ol",{class:"w-full mt-3"},[e("li",{class:"mb-3"},[t(" Download and install "),e("a",{href:"https://www.spigotmc.org/resources/nuvotifier.13449/",target:"_blank"},[e("b",null,"(Nu)Votifier")])]),e("li",{class:"mb-3"},[e("a",{href:"https://minestatus.net/tools/votifier",target:"_blank"},[e("b",null,"Test")]),t(" NuVotifier ")]),e("li",{class:"mb-3"},[t(" Download and install "),e("a",{href:"https://www.spigotmc.org/resources/customvoting-1-14-1-20.28103/",target:"_blank"},[e("b",null,"CustomVoting")])]),e("li",null,"Vote from your favorite website"),e("i",null,[t("You should now see a "),e("b",null,"Vote Site"),t(" when you open "),e("b",null,"/votes")])])])],-1),e("div",{class:"mt-3 mb-20 flex flex-wrap justify-between"},[e("div",{class:"w-full md:w-1/2 md:text-center"},[e("h4",{class:"text-title-tertiary text-primary-500"},"Single Server"),e("ol",{class:"mt-3",start:"5"},[e("li",{class:"mb-3"},[t("Customize in "),e("b",null,"/votesettings"),t(", enjoy!")])])]),e("div",{class:"w-full md:w-1/2 md:text-center"},[e("h4",{class:"text-title-tertiary text-primary-500"},"Server Network"),e("ol",{class:"mt-3",start:"5"},[e("li",{class:"mb-3"},[t("Configure "),e("b",null,"NuVotifier"),t(" to be a vote forwarder to your subservers")]),e("li",{class:"mb-3"},[t("Connect to your database at "),e("i",null,"database"),t(" in "),e("b",null,"settings.yml")]),e("li",{class:"mb-3"},[t("Customize in "),e("b",null,"/votesettings"),t(", enjoy!")])])])],-1),e("p",{class:"mt-3"},[t(" Settings: "),e("a",{href:"https://github.com/sanderderks/CustomVoting/blob/master/src/main/resources/settings.yml",target:"_blank"}," settings.yml ")],-1),e("p",{class:"mt-3"},[t(" Messages and placeholders: "),e("a",{href:"https://github.com/sanderderks/CustomVoting/blob/master/src/main/resources/messages.yml",target:"_blank"}," messages.yml "),e("br"),e("i",{class:"text-neutral-300"},[t("  Supports the usage of Minecraft-& and "),e("a",{href:"https://www.spigotmc.org/resources/customvoting-1-14-1-20.28103/update?update=545483",target:"_blank"}," HEX "),t(" color codes. "),e("br"),t("  For example: "),e("span",{class:"text-green-500"},"&2Test"),t(" or "),e("span",{class:"text-orange-500"},"&#bf921fTest")])],-1)])),_:1})]),e("div",fe,[s(m,{id:"support",class:"my-5 mt-20 w-full xl:w-2/3",title:"Support & Information",description:"Can I help you with anything?"},{default:r(()=>a[29]||(a[29]=[e("div",{class:"mt-10 flex flex-col gap-5"},[e("div",null,[t(" Download "),e("b",null,"CustomVoting"),t(" on "),e("a",{class:"text-yellow-400",href:"https://www.spigotmc.org/resources/customvoting-1-14-1-20.28103/",target:"_blank"},[e("b",null," SpigotMC ")]),e("br"),e("i",{class:"text-neutral-500"}," Are you enjoying my plugin? Please leave a review! ")]),e("div",null,[t(" Find support on our "),e("a",{class:"text-blue-400",href:"https://discord.gg/v3qmJu7jWD",target:"_blank"},[e("b",null," Discord ")]),t(" server "),e("br"),e("i",{class:"text-neutral-500"}," Note that responses may take up to 7 days. This chat is most active in the weekends. ")]),e("div",null,[t(" CustomVoting uses server data collection! "),e("br"),t(" Find us on "),e("a",{class:"text-cyan-500",href:"https://bstats.org/plugin/bukkit/CustomVoting/13544",target:"_blank"},[e("b",null," BStats ")]),e("br"),e("i",{class:"text-neutral-500"},"This is completely optional and configured in your plugins/PluginMetrics folder.")]),e("div",null,[e("b",null,"CustomVoting"),t(" is open source. "),e("br"),t(" Find out more on "),e("a",{class:"text-fuchsia-500",href:"https://github.com/sanderderks/CustomVoting",target:"_blank"},[e("b",null," GitHub ")]),e("br"),e("i",{class:"text-neutral-500"},"Open source means you can view and edit the source code.")])],-1)])),_:1})]),e("div",ge,[s(m,{id:"love",class:"my-5 mt-20 w-full xl:w-2/3 bg-pink-700 bg-opacity-75",title:"Thank you <3"},{default:r(()=>a[30]||(a[30]=[e("p",{class:"text-neutral-300"},[t(" Are you unable to live your life without this plugin? "),e("br"),t(" Consider a donation to show your appreciation and motivate further development: "),e("a",{href:"https://www.paypal.com/donate/?hosted_button_id=75EUKGW7K54JY"},[e("b",null,"PayPal")])],-1)])),_:1})])]),_:1})}}}),he=V(ye,[["__scopeId","data-v-2a51ab33"]]),Te=h({__name:"CustomVoting",setup(f){return(p,l)=>(b(),v(he))}});export{Te as default};
