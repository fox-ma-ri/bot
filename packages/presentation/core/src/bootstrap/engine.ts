/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DependencyContainer } from "tsyringe";
import * as kuromoji from "kuromoji";
import Engine from "../text2speech/engine";
export function initEngineAndKuromoji(
  container: DependencyContainer
): Promise<void> {
  return new Promise((resolve) => {
    kuromoji
      .builder({ dicPath: process.env["KUROMOJI_DIC_PATH"] })
      .build((err, tokenizer) => {
        console.log(err);
        container.register("kuromoji", { useValue: tokenizer });

        container.register("engine", {
          useValue: new Engine(
            process.env["OPEN_JTALK_BIN"]!,
            process.env["OPEN_JTALK_DIC"]!,
            {
              normal: { path: process.env["HTS_VOICE_NORMAL"]! },
              angry: { path: process.env["HTS_VOICE_ANGRY"]! },
              happy: { path: process.env["HTS_VOICE_HAPPY"]! },
              neutral: { path: process.env["HTS_VOICE_NEUTRAL"]! },
              sad: { path: process.env["HTS_VOICE_SAD"]! },
              mei_angry: {
                path: process.env["HTS_VOICE_MEI_ANGRY"]!,
                volume_fix: 1,
              },
              mei_bashful: {
                path: process.env["HTS_VOICE_MEI_BASHFUL"]!,
                volume_fix: 1,
              },
              mei_happy: {
                path: process.env["HTS_VOICE_MEI_HAPPY"]!,
                volume_fix: 1,
              },
              mei_normal: {
                path: process.env["HTS_VOICE_MEI_NORMAL"]!,
                volume_fix: 1,
              },
              mei_sad: {
                path: process.env["HTS_VOICE_MEI_SAD"]!,
                volume_fix: 1,
              },
              takumi_angry: {
                path: process.env["HTS_VOICE_TAKUMI_ANGRY"]!,
                volume_fix: 1,
              },
              takumi_happy: {
                path: process.env["HTS_VOICE_TAKUMI_HAPPY"]!,
                volume_fix: 1,
              },
              takumi_normal: {
                path: process.env["HTS_VOICE_TAKUMI_NORMAL"]!,
                volume_fix: 1,
              },
              takumi_sad: {
                path: process.env["HTS_VOICE_TAKUMI_SAD"]!,
                volume_fix: 1,
              },
              alpha: { path: process.env["HTS_VOICE_ALPHA"]! },
              beta: { path: process.env["HTS_VOICE_BETA"]! },
              delta: { path: process.env["HTS_VOICE_DELTA"]! },
              gamma: { path: process.env["HTS_VOICE_GAMMA"]! },
            },
            process.env["OPEN_JTALK_OUTPUT"],
            tokenizer
          ),
        });
        resolve();
      });
  });
}