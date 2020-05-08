import "reflect-metadata";
import { KlasaClient, KlasaClientOptions } from 'klasa';
import { container } from "tsyringe";
import { GssGameEventRepository ,GssCollectionGroupIdT ,HKTGssCollectionName} from "gss/game-event";
import { GameEventUseCaseImpl } from "usecase/game-event";
import { GameEventNotificationRepositoryKlasa } from "schedule";
import { taskName } from "./tasks/event-notice";
import { config, token } from './config';
import { nextTaskId } from "./setting_keys";
const gameEventNotificationRepository=new GameEventNotificationRepositoryKlasa(taskName,nextTaskId);
class Client extends KlasaClient {

	constructor(options: KlasaClientOptions) {
		super(options);
		gameEventNotificationRepository.init(this);
		// Add any properties to your Klasa Client
	}

	// Add any methods to your Klasa Client

}
const usecase=new GameEventUseCaseImpl<GssGameEventRepository,GssCollectionGroupIdT,HKTGssCollectionName>(new GssGameEventRepository());
KlasaClient.defaultGuildSchema.add(
	"momentLocale","string",{default:"ja"}
);
KlasaClient.defaultGuildSchema.add(
	"momentTZ","string",{default:"Asia/Tokyo"}
)
KlasaClient.defaultGuildSchema.add('event',f=>{
	f.add("sheet","GoogleSpreadSheet")
	f.add("notificationChannel","TextChannel")
	f.add("nextTaskId","string",{configurable:false})
});
container.register("GameEventUseCase",{useValue:usecase});
container.register("GameEventNotificationRepository",{useValue:gameEventNotificationRepository});
const client =new Client(config);

client.login(token);
