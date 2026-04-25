import 'package:flutter/material.dart';

enum DialogType { success, info, fail, warning }

class CustomDialogs {
  static Future<T?> showDefaultDialog<T>({
    required BuildContext context,
    required String text,
    List<Widget> actions = const [],
    required DialogType dialogType,
    bool barrierDismissible = true,
  }) async {
    if (context.mounted) {
      return await showDialog(
        context: context,
        barrierDismissible: barrierDismissible,
        builder: (context) {
          return AlertDialog(
            titlePadding: const EdgeInsets.all(0),
            title: Stack(
              clipBehavior: Clip.none,
              children: [
                Padding(
                  padding: const EdgeInsets.only(
                    left: 12.0,
                    right: 24.0,
                    top: 24.0,
                    bottom: 12.0,
                  ),
                  child: dialogType == DialogType.fail
                      ? const Row(
                          children: [
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8.0),
                              child: Icon(
                                Icons.cancel_outlined,
                                color: Colors.red,
                                size: 50,
                              ),
                            ),
                            Text('Algo deu errado'),
                          ],
                        )
                      : dialogType == DialogType.warning
                      ? const Row(
                          children: [
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8.0),
                              child: Icon(
                                Icons.warning_amber_rounded,
                                color: Colors.amber,
                                size: 50,
                              ),
                            ),
                            Text('Atenção'),
                          ],
                        )
                      : dialogType == DialogType.info
                      ? const Row(
                          children: [
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8.0),
                              child: Icon(
                                Icons.info_outline_rounded,
                                color: Colors.blue,
                                size: 50,
                              ),
                            ),
                            Text('Info'),
                          ],
                        )
                      : const Row(
                          children: [
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8.0),
                              child: Icon(
                                Icons.check_circle_outline,
                                color: Colors.green,
                                size: 50,
                              ),
                            ),
                            Text('Sucesso'),
                          ],
                        ),
                ),
                Align(
                  alignment: Alignment.topRight,
                  child: Padding(
                    padding: const EdgeInsets.all(4.0),
                    child: Material(
                      color: Colors.transparent,
                      borderRadius: BorderRadius.circular(Checkbox.width),
                      clipBehavior: Clip.hardEdge,
                      child: IconButton(
                        icon: const Icon(Icons.cancel),
                        padding: EdgeInsets.zero,
                        onPressed: () => Navigator.pop(context),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.all(Radius.circular(16.0)),
            ),
            content: SelectableText(text),
            actionsAlignment: MainAxisAlignment.center,
            actions: actions,
            actionsPadding: const EdgeInsets.all(16),
          );
        },
      );
    }
    return null;
  }

  static Future<T> buildFormDialog<T>({
    required BuildContext context,
    Widget form = const SizedBox.shrink(),
    double? height = 275,
    bool barrierDismissible = true,
  }) async {
    return await showDialog(
      context: context,
      builder: (context) {
        return Material(
          color: Colors.transparent,
          child: Stack(
            children: [
              GestureDetector(
                onTap: barrierDismissible ? () => Navigator.pop(context) : null,
                child: Container(color: Colors.transparent),
              ),
              Align(
                alignment: Alignment.center,
                child: Container(
                  constraints: BoxConstraints(
                    maxWidth: MediaQuery.of(context).size.width * 0.6 >= 380
                        ? MediaQuery.of(context).size.width * 0.6
                        : 380,
                  ),
                  height: height,
                  clipBehavior: Clip.hardEdge,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25),
                  ),
                  child: form,
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
