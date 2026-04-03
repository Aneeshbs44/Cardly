/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type View = 'landing' | 'analyzer' | 'explore' | 'why-us' | 'resources';

export interface CardResult {
  platform: string;
  discount: string;
  card: string;
  price: string;
  color: string;
}
