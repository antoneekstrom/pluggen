import moment, { duration } from "moment";

export type Pluggen = {
  timeLeft: string;
  state: "pluggen" | "hubben";
};

const pluggenMinutes = 45;
const hubbenMinutes = 15;

export function time(): Pluggen {
  const start = moment().startOf("day").add(8, "hours");
  const now = moment().add(9, "minutes").add(20, "seconds");

  const minutesSinceStart = now.diff(start, "minutes");
  const over = minutesSinceStart % (pluggenMinutes + hubbenMinutes);

  const state = over <= pluggenMinutes ? "pluggen" : "hubben";
  const timeLeftPluggen = pluggenMinutes - over;
  const timeLeftHubben = hubbenMinutes - (over - pluggenMinutes);

  const timeLeft = state === "pluggen" ? timeLeftPluggen : timeLeftHubben;

  return {
    state,
    timeLeft: duration(timeLeft, "minutes").humanize(),
  };
}
