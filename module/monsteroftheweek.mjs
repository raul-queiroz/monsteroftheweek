// Import sheet classes.
import { MonsterOfTheWeekActorSheet } from "./sheets/actor-sheet.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function () {
  console.log("MonsterOfTheWeek | Initializing System");

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("hunter", MonsterOfTheWeekActorSheet, { makeDefault: true });
})