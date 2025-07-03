import { z } from "zod";

export const bioCPassageSchema = z.object({
  bioctype: z.literal("BioCPassage"),
  offset: z.number(),
  infons: z.record(z.string()),
  text: z.string(),
  sentences: z.any().array(),
  annotations: z.any().array(),
  relations: z.any().array(),
});

export const bioCDocumentSchema = z.object({
  bioctype: z.literal("BioCDocument"),
  id: z.string(),
  infons: z.record(z.string()).optional(),
  passages: bioCPassageSchema.array(),
  annotations: z.any().array().optional(),
  relations: z.any().array().optional(),
});

export const bioCCollectionSchema = z.object({
  bioctype: z.literal("BioCCollection"),
  source: z.string(),
  date: z.string(),
  key: z.string(),
  version: z.string().optional(),
  infons: z.record(z.any()).optional(),
  documents: bioCDocumentSchema.array(),
});

export type BioCPassage = z.infer<typeof bioCPassageSchema>;
export type BioCDocument = z.infer<typeof bioCDocumentSchema>;
export type BioCCollection = z.infer<typeof bioCCollectionSchema>;
