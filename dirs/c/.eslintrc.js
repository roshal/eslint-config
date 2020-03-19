exports.root = true;

exports.reportUnusedDisableDirectives = true;

exports.env = {
  node: true,
};

exports.extends = [
  'airbnb',
  'eslint:recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
];

exports.rules = {
  /* possible-errors */
  'no-console': ['error', {
    allow: [
      'error',
      'warn',
    ],
  }],

  /* best-practices */
  // поле current у ref является мутируемым
  'no-param-reassign': ['error', {
    ignorePropertyModificationsFor: [
      'ref',
    ],
  }],
  'no-unused-expressions': 'off',

  /* variables */
  'no-unused-vars': 'off',
  'no-use-before-define': ['error', {
    functions: false,
  }],

  /* stylistic-issues */
  'key-spacing': 'error',
  // максимальная длина строки с учетом пробелов, в стандарте 100
  'max-len': ['error', 250],
  'object-curly-newline': 'off',
  'semi': 'error',

  /* ecmascript-6 */
  'arrow-parens': 'error',

  'import/no-cycle': 'warn',
  'import/prefer-default-export': 'off',
};

exports.overrides = [];

const project = {};

project.files = [
  'leda/**',
];

project.parserOptions = {
  project: 'tsconfig.json',
};

project.extends = [
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'plugin:jsx-a11y/recommended',
];

project.rules = {
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/unbound-method': 'warn',

  // todo remove if unused
  'jsx-a11y/anchor-is-valid': 'off',
  // элемент с обработчиком кликов должен иметь обработчик клавиатуры
  'jsx-a11y/click-events-have-key-events': 'off',
  // todo remove if unused
  // у нас лейбл не всегда имеет htmlFor
  'jsx-a11y/label-has-associated-control': 'off',
  // todo remove if unused
  // по умолчанию рекомендуется проверять как вложенность, так и идентификатор на сопоставление лейбла с элементом управления
  // сделаем так, чтобы одной проверки было достаточно
  'jsx-a11y/label-has-for': 'off',
  // принудительное срабатывание onfocus/onblur при onmouseover/onmouseout
  'jsx-a11y/mouse-events-have-key-events': 'off',
  // html элемент с обработчиком должен иметь роль
  'jsx-a11y/no-static-element-interactions': 'off',
};

const typescript = {};

typescript.files = [
  '*.ts',
  '*.tsx',
];

typescript.extends = [
  'airbnb-typescript',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
];

typescript.plugins = [
  'react',
  'react-hooks',
];

typescript.settings = {
	react: {
		version: 'detect',
	},
};

typescript.rules = {
  'semi': 'off',

  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'warn',
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma',
      requireLast: true,
    },
    singleline: {
      delimiter: 'comma',
      requireLast: false,
    },
  }],
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
  }],
  '@typescript-eslint/semi': 'error',

  // отключаем соответствие defaultProps и propTypes, propTypes не используются
  'react/default-props-match-prop-types': 0,
  // todo update when the minAttributes option appears
  // не всегда используется
  'react/destructuring-assignment': 'off',
  // в js файлах мы используем jsx синтаксис
  'react/jsx-filename-extension': 0,
  'react/jsx-one-expression-per-line': 'off',
  // пропсы по-умолчанию нам не нужны
  'react/require-default-props': 0,
  // отредактируем организацию для порядка методов при создании react компонента
  // добавим в начало определение типов, type-annotations
  'react/sort-comp': [2, {
    order: [
      'type-annotations',
      'static-methods',
      'lifecycle',
      'everything-else',
      'render',
    ],
  }],
  'react/jsx-first-prop-new-line': 'off',
  // allow spread
  'react/jsx-props-no-spreading': 'off',
  'react/state-in-constructor': 'warn',
  'react/static-property-placement': 'warn',

  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
};

exports.overrides.push(project, typescript);

const cypress = {};

cypress.files = [
  'cypress/**',
];

cypress.extends = [
  'plugin:cypress/recommended',
];

const demo = {};

demo.files = [
  'demo/**',
];

demo.rules = {
  'import/no-extraneous-dependencies': 'warn',
  'no-console': 'off',
};

const test = {};

test.files = [
  '*.test.ts',
];

test.extends = [
  'plugin:jest/recommended',
];

exports.overrides.push(cypress, demo, test);
