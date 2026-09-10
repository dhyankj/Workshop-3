/**
 * Provides static publisher lookup helpers for simple page-level data access.
 */

import type { Publisher } from '../types/game';

const publishers: Publisher[] = [
  { id: 1, name: 'Tectonic Forge' },
  { id: 2, name: 'Pixel Harbor' },
  { id: 3, name: 'Northstar Labs' },
];

/**
 * Returns the publisher whose ID matches the provided value.
 *
 * @param id - The publisher identifier to look up.
 * @returns The matching publisher, or undefined if no publisher matches the ID.
 */
export function getPublisherById(id: number): Publisher | undefined {
  return publishers.find((publisher) => publisher.id === id);
}
