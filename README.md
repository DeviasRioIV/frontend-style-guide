# frontend-style-guide
## Sections

- [React Web](react-web.md)
- [React Native](react-native.md)
- [CSS](css.md)
- [Git](#git-guidelines)

## Git Guidelines

### Branching

We use two main branches: main and develop.

Main branch is a mirror of production. The only person allowed to merge into main is the project administrator.

Dev is the main branch used for development. This is where all the team’s work meet before merging into main, so everything here must be production-ready before merging into main.

You should create a branch using your initials and a unique task ID from Clickup. After your changes are done, you should create a merge request from your task ID branch into develop.

Example:

`JD/REC-65` where JD stands for John Doe (initials) and REC-65 is a task ID from clickup

### Committing

Normally, a single line commit is fine, but if you need a body for your commit message, <b>separate the body from the subject with a blank line</b>

* The first line is treated as the subject of the commit and the rest of the text as the body. The blank line separating the summary from the body is critical (unless you omit the body entirely); various tools like log, shortlog and rebase can get confused if you run the two together.

Example:

```sh
[TITLE] Aim for 50 characters limit in your commit message subject. 72 is the hard limit.

[BODY] More detailed explanatory text, if necessary. Wrap it to about 72 characters or so.

Explain the problem that this commit is solving. Focus on why you are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this change? Here's the place to explain them.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Typically a hyphen or asterisk is used for the bullet, preceded by a single space, with blank lines in between, but conventions vary here
```

* Start your commit message capitalized
```sh
$ Awesome commit message
```

* <b>Do not end the subject line with a period</b>

* Use the imperative mood in the subject line:

	Imperative mood just means “spoken or written as if giving a command or instruction”

	```sh
	$ Fix function x causing bug x
	```

	```sh
	$ Add feature x for to do function x
	```

	This sentence can help you get the indicative mood:

	If applied, this commit will your subject line here

	For example:

	```diff
	✓ If applied, this commit will Fix SomeFunc function causing load crash

	✗ If applied, this commit will Fixed SomeFunc function causing load crash
	```