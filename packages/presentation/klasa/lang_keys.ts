import * as moment from "moment-timezone";
import { GameEvent } from "pdomain/game-event";
import { GuildChannel, Role } from "discord.js";

export type PWRD_LANG_TYPE={
    GOOGLE_SPREAD_SHEET_UPDATE_SUCCESS:string,
    INVALID_GOOGLE_SPREAD_SHEET_FORMAT:string,
    NOTIFY_TO_NOTIFICATION_CHANNEL: (event:GameEvent,notificationTime:moment.Moment,now:moment.Moment)=>string,
    COMMAND_LIST_DESCRIPTION:string,
    COMMAND_NEXT_DESCRIPTION:string,
    COMMAND_PUT_DESCRIPTION:string,
    COMMAND_UPDATE_DESCRIPTION:string,
    COMMAND_SHOW_DESCRIPTION:string,
    COMMAND_SHOW_RESULT:(displayChannel:GuildChannel,role:Role,format:string)=>string,
    COMMAND_SET_DESCRIPTION:string,
    COMMAND_SET_SUCCESS:string,
    COMMAND_SET_INVALID_TARGET:string,
    COMMAND_UNSET_DESCRIPTION:string,
    COMMAND_UNSET_SUCCESS:string,
    COMMAND_RECOUNT_DESCRIPTION:string,
    COMMAND_RECOUNT_START:string,
    COMMAND_RECOUNT_SUCCESS:string,
    COMMAND_ADD_ROLE_COMMON_YOU_HAVENT_MANAGE_ROLE_PERMISSION:string,
    COMMAND_ADD_ROLE_COMMON_YOUR_HIGHEST_ROLE_IS_LOWER_THAN_TARGET_ROLE:string,
    COMMAND_SET_BOT_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL:(displayChannel:GuildChannel)=>string,
    COMMAND_SET_YOU_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL:(displayChannel:GuildChannel)=>string,
    COMMAND_START_DESCRIPTION:string,
    COMMAND_START_SUCCESS:string,
    COMMAND_START_FAILED_WITH_USER_NOT_IN_VC:string,
    COMMAND_START_FAILED_WITH_BOT_NOT_JOINABLE:string
    COMMAND_END_DESCRIPTION:string,
}

export const COMMAND_UPDATE_SUCCESS="GOOGLE_SPREAD_SHEET_UPDATE_SUCCESS";

export const INVALID_GOOGLE_SPREAD_SHEET_FORMAT="INVALID_GOOGLE_SPREAD_SHEET_FORMAT";
export const NOTIFY_TO_NOTIFICATION_CHANNEL="NOTIFY_TO_NOTIFICATION_CHANNEL";
export const COMMAND_LIST_DESCRIPTION="COMMAND_LIST_DESCRIPTION";
export const COMMAND_NEXT_DESCRIPTION="COMMAND_NEXT_DESCRIPTION";
export const COMMAND_PUT_DESCRIPTION="COMMAND_PUT_DESCRIPTION";
export const COMMAND_UPDATE_DESCRIPTION="COMMAND_UPDATE_DESCRIPTION";
export const COMMAND_SHOW_DESCRIPTION="COMMAND_SHOW_DESCRIPTION";
export const COMMAND_SHOW_RESULT="COMMAND_SHOW_RESULT";
export const COMMAND_SET_SUCCESS="COMMAND_SET_SUCCESS";
export const COMMAND_SET_INVALID_TARGET="COMMAND_SET_INVALID_TARGET";
export const COMMAND_SET_DESCRIPTION="COMMAND_SET_DESCRIPTION";
export const COMMAND_UNSET_DESCRIPTION="COMMAND_UNSET_DESCRIPTION";
export const COMMAND_UNSET_SUCCESS="COMMAND_UNSET_SUCCESS";
export const COMMAND_RECOUNT_DESCRIPTION="COMMAND_RECOUNT_DESCRIPTION"
export const COMMAND_RECOUNT_START="COMMAND_RECOUNT_START"
export const COMMAND_RECOUNT_SUCCESS="COMMAND_RECOUNT_SUCCESS"
export const COMMAND_ADD_ROLE_COMMON_YOU_HAVENT_MANAGE_ROLE_PERMISSION="COMMAND_ADD_ROLE_COMMON_YOU_HAVENT_MANAGE_ROLE_PERMISSION";
export const COMMAND_ADD_ROLE_COMMON_YOUR_HIGHEST_ROLE_IS_LOWER_THAN_TARGET_ROLE="COMMAND_ADD_ROLE_COMMON_YOUR_HIGHEST_ROLE_IS_LOWER_THAN_TARGET_ROLE";
export const COMMAND_SET_BOT_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL="COMMAND_SET_BOT_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL";
export const COMMAND_SET_YOU_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL="COMMAND_SET_YOU_DONT_HAVE_MANGE_CHANNEL_PERMISSON_ON_TARGET_CHANNEL";
export const COMMAND_START_DESCRIPTION="COMMAND_START_DESCRIPTION";
export const COMMAND_START_SUCCESS="COMMAND_START_SUCCESS";
export const COMMAND_START_FAILED_WITH_USER_NOT_IN_VC="COMMAND_START_FAILED_WITH_USER_NOT_IN_VC";
export const COMMAND_START_FAILED_WITH_BOT_NOT_JOINABLE="COMMAND_START_FAILED_WITH_BOT_NOT_JOINABLE";
export const COMMAND_END_SUCCESS="COMMAND_END_SUCCESS";
export const COMMAND_END_DESCRIPTION="COMMAND_END_DESCRIPTION";
