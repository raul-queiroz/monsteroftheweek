/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class MonsterOfTheWeekActorSheet extends ActorSheet {
  get template() {
    const path = "systems/monsteroftheweek/templates/actor";

    return `${path}/actor-sheet.hbs`
  }

  /** @override */
  getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    const actorData = this.actor.toObject(false);
    context.system = actorData.system;
    console.log(context.system)
    return context;
  }
}