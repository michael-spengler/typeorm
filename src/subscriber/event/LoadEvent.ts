import {EntityManager} from "../../entity-manager/EntityManager.ts";
import {Connection} from "../../connection/Connection.ts";
import {QueryRunner} from "../../query-runner/QueryRunner.ts";
import {EntityMetadata} from "../../metadata/EntityMetadata.ts";

/**
 * LoadEvent is an object that broadcaster sends to the entity subscriber when an entity is loaded from the database.
 */
export interface LoadEvent<Entity> {

    /**
     * Connection used in the event.
     */
    connection: Connection;

    /**
     * QueryRunner used in the event transaction.
     * All database operations in the subscribed event listener should be performed using this query runner instance.
     */
    queryRunner: QueryRunner;

    /**
     * EntityManager used in the event transaction.
     * All database operations in the subscribed event listener should be performed using this entity manager instance.
     */
    manager: EntityManager;

    /**
     * Loaded entity.
     */
    entity: Entity;

    /**
     * Metadata of the entity.
     */
    metadata: EntityMetadata;

}
