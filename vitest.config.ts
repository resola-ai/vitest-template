/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        globalSetup: ['./globalSetup.ts'],
        exclude: ['node_modules', 'fixtures', 'dist'],
    },
})