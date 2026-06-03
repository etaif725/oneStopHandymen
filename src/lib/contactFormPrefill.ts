import { SERVICES } from '@/constants/business';
import type { ContactFormData } from '@/schemas/contactFormSchema';

const serviceById = Object.fromEntries(SERVICES.map((s) => [s.id, s]));

const serviceByNameLower = Object.fromEntries(
  SERVICES.map((s) => [s.name.toLowerCase(), s]),
);

const PROPERTY_TYPES = ['residential', 'commercial', 'multi-unit', 'other'] as const;

export type ContactFormPrefill = Pick<ContactFormData, 'serviceNeeded' | 'propertyType'> & {
  description?: string;
};

function parsePropertyType(
  value: string | null,
): ContactFormData['propertyType'] | undefined {
  if (!value) return undefined;
  return PROPERTY_TYPES.includes(value as (typeof PROPERTY_TYPES)[number])
    ? (value as ContactFormData['propertyType'])
    : undefined;
}

export function propertyTypeForServiceCategory(
  category: (typeof SERVICES)[number]['category'],
): ContactFormData['propertyType'] {
  switch (category) {
    case 'commercial':
    case 'hospitality':
      return 'commercial';
    case 'str':
      return 'residential';
    default:
      return 'residential';
  }
}

function findService(params: URLSearchParams) {
  const serviceId = params.get('serviceId');
  if (serviceId && serviceById[serviceId]) {
    return serviceById[serviceId];
  }

  const serviceName = params.get('service');
  if (!serviceName) return undefined;

  const decoded = decodeURIComponent(serviceName).trim();
  return (
    SERVICES.find((s) => s.name === decoded) ??
    serviceByNameLower[decoded.toLowerCase()]
  );
}

/** Map contact URL query params to form defaults (service + property type). */
export function contactFormPrefillFromSearchParams(
  params: URLSearchParams,
): ContactFormPrefill | null {
  const service = findService(params);
  if (!service) return null;

  const propertyType =
    parsePropertyType(params.get('propertyType')) ??
    propertyTypeForServiceCategory(service.category);

  return {
    serviceNeeded: [service.name],
    propertyType,
    description: `I'd like to discuss ${service.name}.`,
  };
}
