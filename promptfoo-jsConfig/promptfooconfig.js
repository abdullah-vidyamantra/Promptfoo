module.exports = {
  description: 'A translator built with LLM',
  prompts: ['prompts.txt'],
  providers: ['openai:gpt-3.5-turbo'],
  tests: 'tests.csv',
  outputPath: "output.json"
};