import type { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('groceries', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description');
        table.decimal('price', 10, 2).notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('groceries');
}

