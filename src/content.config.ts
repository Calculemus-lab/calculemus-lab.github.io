import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const events = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/events" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(), // You can use this for the event date
		heroImage: z.string().optional(),
		location: z.string().default('TBA'), // Extra field specifically for events!
	}),
});

const projects = defineCollection({
    // Use the glob loader to match your other collections
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        status: z.enum(['Planning', 'Active', 'Deployed', 'Archived']),
        repository: z.string().url().optional(),
        framework: z.string(),
        modelSize: z.string().optional(),
        compute: z.string().optional(),
        startDate: z.coerce.date(),
    }),
});

export const collections = { blog, events, projects, };
