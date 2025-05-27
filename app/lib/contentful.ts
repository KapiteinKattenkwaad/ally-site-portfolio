import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

export async function getHeaderContent() {
    const entries = await client.getEntries({
      content_type: 'homeSection',
      limit: 1,
    });
  
    const fields = entries.items[0]?.fields as {
      title: string;
      subtitle: string;
      ctaText?: string;
      ctaLink?: string;
      backgroundImage?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
    
    return fields;
  }

  export async function getServices() {
    const entries = await client.getEntries({
      content_type: 'services',
    });
  
    return entries.items.map((item) => {
      const fields = item.fields as {
        title: string;
        description: string;
        icon?: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
      return fields;
    });
  }

  export async function getWhatCanIDoSection() {
    const entries = await client.getEntries({
      content_type: 'whatCanIDo',
      limit: 1,
    });
  
    const entry = entries.items[0];
    const fields = entry.fields as unknown as {
      title: string;
      content: Document;
      image: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
    };
  
    return {
      title: fields.title,
      content: fields.content,
      imageUrl: 'https:' + fields.image.fields.file.url,
      imageAlt: fields.image.fields.title || 'What I can do image',
    };
  }

  export async function getWorkExamples() {
    const entries = await client.getEntries({
      content_type: 'workExample',
      order: ['fields.order'],
    });
  
    return entries.items.map((item) => {
      const fields = item.fields as {
        title: string;
        description: any;
        image: {
          fields: {
            file: {
              url: string;
            };
            title: string;
          };
        };
      };
  
      return {
        title: fields.title,
        description: fields.description,
        imageUrl: 'https:' + fields.image.fields.file.url,
        imageAlt: fields.image.fields.title || fields.title,
      };
    });
  }

  export async function getSeoSettings() {
    const entries = await client.getEntries({
      content_type: 'seo',
      limit: 1,
    });
  
    const fields = entries.items[0]?.fields as {
      title: string;
      description: string;
      ogImage?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  
    return {
      title: fields.title,
      description: fields.description,
      ogImage: fields.ogImage?.fields.file.url,
    };
  }
  