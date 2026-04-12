import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final Icon? pageIcon;
  final Widget pageName;
  final List<Widget> actions;
  final PreferredSizeWidget? bottom;
  final bool automaticallyImplyLeading;

  const CustomAppBar({
    this.pageIcon,
    this.pageName = const SizedBox.shrink(),
    this.actions = const [],
    this.bottom,
    this.automaticallyImplyLeading = true,
    super.key,
    double? toolbarHeight,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Theme.of(context).colorScheme.surfaceContainerHighest,
      automaticallyImplyLeading: automaticallyImplyLeading,
      title: Row(
        children: [
          Flexible(child: pageIcon ?? const SizedBox.shrink()),
          Expanded(
            child: Container(
              padding: const EdgeInsets.only(left: 8.0),
              child: pageName,
            ),
          ),
        ],
      ),
      actions: actions,
      bottom: bottom,
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(
    kToolbarHeight + (bottom != null ? bottom!.preferredSize.height : 0),
  );
}
