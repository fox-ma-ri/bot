import {Command,CommandStore,KlasaMessage} from 'klasa';
import * as GUILD_SETINGS from "../../guild_settings_keys";
import * as LANG_KEYS from "../../lang_keys";
export default class extends Command{
    constructor(
        store: CommandStore,
        file: string[],
        directory: string,
    ) {
        super(store,file,directory,{
            usage:"<word:string>",
            runIn:["text"],
            aliases:["dw"],
            description:lang=>lang.get(LANG_KEYS.COMMAND_END_DESCRIPTION),
            usageDelim:" "
        });
    }
    public async run(msg: KlasaMessage,[word]:[string]): Promise<KlasaMessage | KlasaMessage[] | null>{
        const arr:{k:string,v?:string,p?:string,p1?:string,p2?:string,p3?:string}[]=msg.guildSettings.get(GUILD_SETINGS.text2speechDictionary);
        const index=arr.findIndex(({k,v}:{k:string,v?:string,p?:string,p1?:string,p2?:string,p3?:string})=>word===k);
        if(index<0){
            return msg.sendLocale(LANG_KEYS.COMMAND_DELETE_WORD_SUCCESS);
        }
        await msg.guildSettings.update(GUILD_SETINGS.text2speechDictionary.join("."),{action:"remove",arrayPosition:index});
        return msg.sendLocale(LANG_KEYS.COMMAND_DELETE_WORD_SUCCESS);
    }

}