import moment, { Duration, duration } from "moment";

type State = "plugga" | "pausa";

export type Pluggen = {
  timeLeft: Duration;
  state: State;
};

const pluggenMinutes = 45;
const hubbenMinutes = 15;

export function getModel(): Pluggen {
  return {
    state: getState(),
    timeLeft: getMinutesLeft(),
  };
}

function getMinutesLeft() {
  const over = getTimeOver();
  const timeLeftPluggen = pluggenMinutes - over;
  const timeLeftHubben = hubbenMinutes - (over - pluggenMinutes);

  return duration(
    getState() === "plugga" ? timeLeftPluggen : timeLeftHubben,
    "minutes"
  );
}

function getTimeOver() {
  return getMinutesSinceStart() % (pluggenMinutes + hubbenMinutes);
}

function getState(): State {
  return getTimeOver() <= pluggenMinutes ? "plugga" : "pausa";
}

function getMinutesSinceStart() {
  const start = moment().startOf("day").add(8, "hours");
  const now = moment();

  return now.diff(start, "minutes");
}
