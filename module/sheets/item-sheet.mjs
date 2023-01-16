/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class MonsterOfTheWeekItemSheet extends ItemSheet {
    /** @override */
    get template() {
        const path = "systems/monsteroftheweek/templates/item";
        // Return a single sheet for all item types.
        return `${path}/item-sheet.html`;

        // Alternatively, you could use the following return statement to do a
        // unique item sheet by type, like `weapon-sheet.html`.
        //return `${path}/item-${this.item.type}-sheet.html`;
    }

    /** @override */
    getData() {
        // Retrieve base data structure.
        const context = super.getData();

        context.config = CONFIG.MONSTEROFTHEWEEK;

        return context;
    }
}