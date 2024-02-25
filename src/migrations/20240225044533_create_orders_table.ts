import type { Knex } from "knex";


export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.integer('userId').unsigned().references('id').inTable('users');
        table.integer('groceryId').unsigned().references('id').inTable('groceries');
        table.integer('quantity').notNullable();
        table.timestamps(true, true);
    });
}


export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('orders');
}

